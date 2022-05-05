var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { Animated } from 'react-native';
import { ListItemBase } from './ListItem';
import { ListItemContent } from './ListItem.Content';
import { Icon } from '../Icon';
export const ListItemAccordion = (_a) => {
    var { children, isExpanded = false, icon, expandIcon, content, noRotation, noIcon, animation = {
        duration: 350,
        type: 'timing',
    } } = _a, rest = __rest(_a, ["children", "isExpanded", "icon", "expandIcon", "content", "noRotation", "noIcon", "animation"]);
    const { current: transition } = React.useRef(new Animated.Value(0));
    const startAnimation = React.useCallback(() => {
        if (typeof animation !== 'boolean') {
            Animated[animation.type || 'timing'](transition, {
                toValue: Number(isExpanded),
                useNativeDriver: true,
                duration: animation.duration || 350,
            }).start();
        }
    }, [isExpanded, transition, animation]);
    React.useEffect(() => {
        startAnimation();
    }, [isExpanded, startAnimation]);
    const rotate = noRotation || (typeof animation === 'boolean' && animation)
        ? '0deg'
        : transition.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '-180deg'],
        });
    return (React.createElement(React.Fragment, null,
        React.createElement(ListItemBase, Object.assign({}, rest),
            React.isValidElement(content) ? content : React.createElement(ListItemContent, null),
            !noIcon &&
                (icon ? (React.createElement(Icon, (isExpanded ? expandIcon : icon))) : (React.createElement(Animated.View, { testID: "RNE__ListItem__Accordion__Icon", style: {
                        transform: [
                            {
                                rotate,
                            },
                        ],
                    } },
                    React.createElement(Icon, { name: 'chevron-down', type: "material-community" }))))),
        isExpanded && (React.createElement(Animated.View, { testID: "RNE__ListItem__Accordion__Children", style: [
                {
                    opacity: transition,
                },
            ] }, children))));
};
ListItemAccordion.displayName = 'ListItem.Accordion';
