//https://github.com/fluuuid/codedoodl.es/blob/bb0a5216fa697d8ee661e60f6acad5a4b8425053/project/coffee/utils/CodeWordTransitioner.coffee
import React from 'react';
import { defaults, head, tail, range, random, map } from 'lodash/fp';
import classname from 'classname';

const config = {
    minWrongChars : 5,
    maxWrongChars : 27,
    minCharInDelay : 40,
    maxCharInDelay : 70,
    minCharOutDelay: 40,
    maxCharOutDelay: 70,
    chars: 'abcdefghijklmnopqrstuvwxyz0123456789!?*()@£$%^&_-+=[]{}:;\'"\\|<>,./~`'.split(''),
    delay: 0
};

function getRandomChar() {
    return config.chars[random(0, config.chars.length - 1)];
}

function getRandomWrongChars(settings) {
    const charCount = random(settings.minWrongChars, settings.maxWrongChars);
    return range(0, charCount).map(function() {
        return {
            char: getRandomChar(),
            inDelay: random(config.minCharInDelay, config.maxCharInDelay),
            outDelay: random(config.minCharOutDelay, config.maxCharOutDelay)
        };
    });
}

function prepareChar(letter, settings) {
    return {
        target: letter,
        current: null,
        wrongChars: getRandomWrongChars(settings)
    };
}

const TransitionLetter = React.createClass({
    getInitialState () {
        return prepareChar(this.props.children, this.props.settings);
    },

    animateNext() {
        const self = this;
        const nextChar = head(this.state.wrongChars);
        if (!nextChar) {
            this.setState({current: this.state.target});
        } else {
            setTimeout(function() {
                self.setState({current: nextChar.char, wrongChars: tail(self.state.wrongChars)});
                setTimeout(function() {
                    self.animateNext();
                }, nextChar.outDelay);
            }, nextChar.inDelay);
        }
    },

    componentDidMount () {
        setTimeout(this.animateNext, this.props.settings.delay);
    },

    render () {
        const current = this.state.current || '\u00A0';
        return <span className='transition-letter'>{current}</span>;
    }
});

export function TransitionWord({className, children, settings}) {
    const _settings = defaults(config, settings);
    const letters = children.split('').map(function(letter, id) {
        return <TransitionLetter key={id} settings={_settings}>{letter}</TransitionLetter>;
    });
    return (
        <div className={classname('transition-word', className)}>
            {letters}
        </div>
    );
};
