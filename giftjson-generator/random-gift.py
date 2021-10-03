import json 
import random 
f = open('giftjson-generator/gift-list.txt', encoding='utf-8')
giftlist = []

for ele in f.readlines():
    giftname, amount, provider = ele.split('\t')[0], ele.split('\t')[1], ele.split('\t')[2]
    for i in range(int(amount)):
        title =  provider[:-1]+' 提供\n\n'+giftname 
        giftlist.append(title)
random.shuffle(giftlist)
print(len(giftlist))
res = {}
for idx,ele in enumerate(giftlist[:36]):
    res[idx+1] = ele
open('src\components\json\gift.json', 'w',
     encoding='utf-8').write(json.dumps(res))
print(res)
