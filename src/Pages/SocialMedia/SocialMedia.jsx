import React from 'react';
import TweeterTimeline from '../../Components/Twitter/Timeline';
import Github from '../../Components/Github/Github';

const SocialMedia = () => {
    return (<div style={{ background: '#1A1E23', margin: '0' }}>
        <TweeterTimeline />
        <Github login='hoseacodes' />
    </div>
    )

}

export default SocialMedia;