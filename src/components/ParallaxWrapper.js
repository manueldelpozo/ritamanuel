import React from 'react';
import Plx from 'react-plx';

const ParallaxWrapper = ({ children, start, end, duration, animations, style }) => (
    <Plx parallaxData={[
        {
            start,
            end,
            properties: animations.map(animation => ({
                property: animation[0],
                startValue: animation[1],
                endValue: animation[2],
            })),
            duration,
            easing: 'easeInOut',
        },

    ]} style={style}>
        {children}
    </Plx>
);

export default ParallaxWrapper;
