import asyncio
import websockets
import re
from time import sleep
# Data format:
#
#  {
#      "updatatype":"set"/"add",            //   新資料 or 疊加
#      data:[                               //   [ [[時間, 緯度, 經度, 高度]...], ]
#          [                                //   第一筆
#           [64444 ,24.003, 121.123, 60],
#           [64445 ,24.003, 121.123, 61],
#           ...
#           [64446 ,24.003, 121.123, 62]
#          ],
#          [                                //   第二筆
#           [64444 ,24.003, 121.123, 60],
#           [64445 ,24.003, 121.123, 61],
#           ...
#           [64446 ,24.003, 121.123, 62]],
#          ]
#      ]
#  }
state = "off"
CLIENTS = set()

def parsedata():
    global r,l
    r=[]
    f = open('20220508_F4_h_round5_gnss.txt','r')
    for i in f.readlines():
        x = re.sub(' +',',',i).split(',')
        r.append(str( [int(x[0]), round(float(x[1]),4), round(float(x[2]), 4), round(float(x[3]), 4)] ))
    f.close()
    l = len(r)

def getmsg(le):
    global r
    tmp = []
    for i in range(le):
        tmp.append(r[i])
    msg = '{"updatetype":"add","data":[['+','.join(tmp) + ']]}'
    return msg

async def echo(websocket):
    global state, l
    CLIENTS.add(websocket)
    async for message in websocket:
        print('RECV : ', message)
        if message == 'start':
            state = "on"
            await websocket.send(getmsg(l))
        if message == 'stop':
            state = "off"
        if message == 'close':
            state = "close"
            # asyncio.get_event_loop().stop()

async def main():
    asyncio.ensure_future(websockets.serve(echo, 'localhost', 8765))

if __name__ == "__main__":
    parsedata()
    loop = asyncio.get_event_loop()
    loop.create_task(main())
    loop.run_forever()
