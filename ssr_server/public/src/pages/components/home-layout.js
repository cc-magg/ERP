import React from 'react';

import { home } from '../css/home';

function HomeLayout(props) {
    return(
        <section>
            {props.children}
            <style jsx>{home}</style>
        </section>
    );
}

export default HomeLayout;


