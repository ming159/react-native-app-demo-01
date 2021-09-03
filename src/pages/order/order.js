import { parseTime } from '../../utils/util';

export function orders(){
    let time = parseTime(new Date(),"yyyy-MM-dd HH:mm:ss");
    return {
        data: [
            {
              time: time,
              img: require('../../assets/img/ad.png'),
              desc:`To me, the past is black and white， but the future is always color．----对我而言，过去平淡无奇；而未来，却多姿多彩（轩尼诗酒）`
            },
            {
              time: '2021-09-01 12:09:26',
              img: require('../../assets/img/n1.png'),
              desc:`Poetry in motion, dancing close to me．----动态的诗，向我舞近。（丰田汽车)`
            },
            {
              time: '2021-02-22 13:33:56',
              img: require('../../assets/img/n2.png'),
              desc:`Engineered to move the human spirit.(Mercedes-Benz)----人类精神的动力。（梅塞德斯-奔驰）`
            },
            {
              time: '2020-11-15 17:39:26',
              img: require('../../assets/img/n3.png'),
              desc:`Behind that healthy smile,there ’s a Crest kid.(Crest toothpaste)----健康笑容来自佳洁士。（佳洁士牙膏）`
            },
            {
              time: '2020-09-26 08:00:45',
              img: require('../../assets/img/ad.png'),
              desc:`Come to where the flavour is． marlboro country.----光临风韵之境——万宝路世界。（万宝路香烟）`
            },
            {
              time: '2020-06-25 22:49:55',
              img: require('../../assets/img/n1.png'),
              desc:`No business too small, no problem too big. ....----没有不做的小生意，没有解决不了的大问题。 （ibm公司）`
            },
        ]
    }
}
