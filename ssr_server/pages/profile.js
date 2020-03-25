import React, {Component} from "react";
import { initStore } from '../store';
import Link from 'next/link';

class HomePage extends Component {
    render() {
        return (
            <div>
                <Link href="/">
                    <a>ir al HOME</a>
                </Link>
            </div>
        )
    }
}
export default initStore(HomePage, null, null, 'PROFILE')