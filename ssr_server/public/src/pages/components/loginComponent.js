import React from 'react';
import Link from 'next/link';
import Form from '../../components/form-login/containers/formLogin';

const LoginComponent = props => {
    let logued = (<div>
        <div className="text-center">ALREADY IN</div>
        <div className="text-center logout" onClick={props.logout}>¿wanna logout?</div>
        <div className="text-center">
            <Link href="/"><a>ir al home</a></Link>
            <span> ---- </span>
            <Link href="/main"><a>ir al dashboard</a></Link>
        </div>
    </div>);
    let login = (<div>
        <div className="text-center">
            <img src="/images/userIcon.png" />
        </div>
        <div className="paddingTop20">
            <Form baseColor='#c55a11' />
        </div>
    </div>);
    //console.log('is logued? '+props.isLogued);
    return <div>
        {(props.isLogued) ? logued : login}
        <style jsx>{
            `img {
                max-width: 100px;
                margin: 0 auto;
            }
            .paddingTop20 {
                padding-top: 15px;
            }
            .logout {
                color: red;
            }
            `
        }</style>
    </div>;
}

export default LoginComponent;