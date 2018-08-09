import * as React from 'react';
import './CurtainCountdown.less';

type CurtainCountdownProps = {
    timeRemaining: string;
}

function CurtainCountdown(props: CurtainCountdownProps) {
    return (
        <div className="curtain-container">
        </div>
    );
}

export default CurtainCountdown;