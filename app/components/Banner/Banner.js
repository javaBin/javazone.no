//@flow
import * as React from 'react';
import classnames from 'classnames';
import './Banner.less';

// SVGs
import background from '../../assets/2018/banner/background.svg';
import fog from '../../assets/2018/banner/fog.svg';
import cityBack from '../../assets/2018/banner/cityBack.svg';
import cityFront from '../../assets/2018/banner/cityFront.svg';
import trees from '../../assets/2018/banner/trees.svg';
import bus from '../../assets/2018/banner/bus.svg';
import plane from '../../assets/2018/banner/plane.svg';
import javazone2018Logo from '../../assets/2018/banner/javazone2018_logo.svg';
import cloud1 from '../../assets/2018/banner/cloud1.svg';
import cloud2 from '../../assets/2018/banner/cloud2.svg';
import cloud3 from '../../assets/2018/banner/cloud3.svg';
import cloud4 from '../../assets/2018/banner/cloud4.svg';
import cloud5 from '../../assets/2018/banner/cloud5.svg';

type BannerProps = {
}

type BannerState = {
    bannerHeight: number
}

class Banner extends React.Component<BannerProps, BannerState> {
    render() {

        let bannerClass = classnames({
            'banner': true
        })

        return (
            <div className={bannerClass}>
                <img className="background" src={background} />
                <img className="fog-layer" src={fog} />
                <img className="city-layer" src={cityBack} />
                <img className="city-layer" src={cityFront} />
                <img className="tree-layer" src={trees} />
                <img className="bus-layer" src={bus} />
                <img className="cloud1-layer" src={cloud1} />
                <img className="cloud2-layer" src={cloud2} />
                <img className="cloud3-layer" src={cloud3} />
                <img className="cloud4-layer" src={cloud4} />
                <img className="cloud5-layer" src={cloud5} />
                <img className="cloud6-layer" src={cloud4} />
                <img className="cloud7-layer" src={cloud3} />
                <img className="cloud8-layer" src={cloud2} />
                <img className="plane-layer" src={plane} />
                <img className="logo-layer" src={javazone2018Logo} />
                <div className="logo-text">
                    <h1>JAVAZONE 2018</h1>
                </div>
            </div>
        )
    }
}

export default Banner;