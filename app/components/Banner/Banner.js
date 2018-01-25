//@flow
import * as React from 'react';
import classnames from 'classnames';
import './Banner.less';

// SVGs
import layer1 from '../../assets/2018/pixelOslo_background_l1.svg';
import layer2 from '../../assets/2018/pixelOslo_fog_l2.svg';
import layer3 from '../../assets/2018/pixelOslo_city_l3.svg';
import layer4 from '../../assets/2018/pixelOslo_logo_l4.svg';
import layer5 from '../../assets/2018/pixelOslo_clouds_l5.svg';

type BannerProps = {
}

type BannerState = {
    bannerHeight: number
}


class Banner extends React.Component<BannerProps, BannerState> {
    
    state = {
        bannerHeight: 0
    }

    componentDidMount() {
        let imgHeight = document.getElementById("background");
        if(imgHeight) {
            this.setState({
                bannerHeight: imgHeight.clientHeight
            })
        }
    }

    render() {

        let bannerClass = classnames({
            'banner': true
        })

        return (
            <div className={bannerClass} style={{height: this.state.bannerHeight}}>
                <img id="background" className="layer1" src={layer1} />
                <img className="layer2" src={layer2} />
                <img className="layer3" src={layer3} />
                <img className="layer5" src={layer5} />
                <img className="layer4" src={layer4} />
            </div>
        )
    }
}

export default Banner;