import { Outlet } from 'react-router-dom';
import { WrapBox, BarWrapper, NavItem } from './WrapBar.styled';

import { Suspense } from 'react';
export const WrapBar = () => {
    return (
        <WrapBox>
            <BarWrapper>
                <NavItem to="/" end>
                    Home
                </NavItem>
                <NavItem to="movies">Movies</NavItem>
            </BarWrapper>
            <Suspense fallback={<div>...Loading</div>}>
                <Outlet />
            </Suspense>
        </WrapBox>
    );
};
