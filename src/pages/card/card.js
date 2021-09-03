import { parseTime } from '../../utils/util'

const cards = {
    data: [
        {
          time: parseTime(new Date(),"yyyy-MM-dd HH:mm:ss"),
          store: '京东七匹狼品牌自营专卖店',
          price: '79.00',
          icon: require('../../assets/img/store.png'),
          img: require('../../assets/img/ad.png'),
          desc:`To me, the past is black and white， but the future is always color．----对我而言，过去平淡无奇；而未来，却多姿多彩（轩尼诗酒）`
        },
        {
          time: '2021-09-01 12:09:26',
          store: '鸿星尔克男装专卖店',
          price: '239.00',
          icon: require('../../assets/img/store.png'),
          img: require('../../assets/img/n1.png'),
          desc:`Poetry in motion, dancing close to me．----动态的诗，向我舞近。（丰田汽车)`
        },
        {
          time: '2021-02-22 13:33:56',
          store: '农夫山泉优质矿泉水总经销',
          price: '2.99',
          icon: require('../../assets/img/store.png'),
          img: require('../../assets/img/n2.png'),
          desc:`Engineered to move the human spirit.(Mercedes-Benz)----人类精神的动力。（梅塞德斯-奔驰）`
        },
        {
          time: '2020-11-15 17:39:26',
          store: '海天酱油保障你的生活美味',
          price: '27.58',
          icon: require('../../assets/img/store.png'),
          img: require('../../assets/img/n3.png'),
          desc:`Behind that healthy smile,there ’s a Crest kid.(Crest toothpaste)----健康笑容来自佳洁士。（佳洁士牙膏）`
        },
        {
          time: '2020-09-26 08:00:45',
          store: '华为Mate p40系列手机预售营销部',
          price: '5999.00',
          icon: require('../../assets/img/store.png'),
          img: require('../../assets/img/ad.png'),
          desc:`Come to where the flavour is． marlboro country.----光临风韵之境——万宝路世界。（万宝路香烟）`
        },
        {
          time: '2020-06-25 22:49:55',
          store: '小米智能家居智能语音',
          price: '19999.00',
          icon: require('../../assets/img/store.png'),
          img: require('../../assets/img/n1.png'),
          desc:`No business too small, no problem too big. ....----没有不做的小生意，没有解决不了的大问题。 （ibm公司）`
        },
    ]
}

export default cards