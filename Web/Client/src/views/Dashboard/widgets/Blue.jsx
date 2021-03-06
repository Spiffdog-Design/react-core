import React from 'react';
import styled from 'styled-components';

import { TileItem } from 'components/grids';

const StyledItem = styled(TileItem)`
    box-shadow: inset 0 0 1px 1px blue, 0 0 1px 0px blue, 0 1px 2px 0px hsl(0deg 0% 0% / 50%);
`;

export const Defaults = {
    w: 4,
    h: 2,
};

export const Component = React.forwardRef(({ children, ...props }, ref) => {
    return (
        <StyledItem ref={ref} {...props}>
            <div>Blue: {children}</div>
        </StyledItem>
    );
});
