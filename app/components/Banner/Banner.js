//@flow
import * as React from 'react';
import classnames from 'classnames';
import './Banner.less';

// SVGs
import background from '../../assets/2018/pixelOslo_background_l1.svg';
import fogLayer from '../../assets/2018/pixelOslo_fog_l2.svg';
import cityLayer from '../../assets/2018/pixelOslo_city_nobarcode_l3.svg';
import cityFrontLayer from '../../assets/2018/pixelOslo_new_city_noTrees.svg';
import treesLayer from '../../assets/2018/trees.svg';
import busLayer from '../../assets/2018/pixelOslo_buss_grouped-01.svg';
import planeLayer from '../../assets/2018/pixelOslo_plane_grouped-01.svg';
import logo from '../../assets/2018/logoBig_jz2018_vertical.svg';
import cloud1 from '../../assets/2018/clouds/cloud1_new.svg';
import cloud2 from '../../assets/2018/clouds/cloud2_new.svg';
import cloud3 from '../../assets/2018/clouds/cloud3_new.svg';
import cloud4 from '../../assets/2018/clouds/cloud4_new.svg';
import cloud5 from '../../assets/2018/clouds/cloud5_new.svg';

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
                <img className="fog-layer" src={fogLayer} />
                <img className="city-layer" src={cityLayer} />
                <img className="city-layer" src={cityFrontLayer} />
                <img className="tree-layer" src={treesLayer} />
                <img className="bus-layer" src={busLayer} />
                <img className="cloud1-layer" src={cloud1} />
                <img className="cloud2-layer" src={cloud2} />
                <img className="cloud3-layer" src={cloud3} />
                <img className="cloud4-layer" src={cloud4} />
                <img className="cloud5-layer" src={cloud5} />
                <img className="cloud6-layer" src={cloud4} />
                <img className="cloud7-layer" src={cloud3} />
                <img className="cloud8-layer" src={cloud2} />
                <img className="plane-layer" src={planeLayer} />
                <img className="logo-layer" src={logo} />
                <div className="logo-text">
                    <h1>JAVAZONE 2018</h1>
                </div>
            </div>
        )
    }
}

export default Banner;