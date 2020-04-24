import React from 'react';
import Link from 'next/link';
import Form from '../../components/form-login/containers/formLogin';

const LoginComponent = props => {
    //console.log('is logued? '+props.isLogued);
    return <div>
        {(props.isLogued) ?
            <div>
                <div className="text-center">ALREADY IN</div>
                <div className="text-center logout" onClick={props.logout}>¿wanna logout?</div>
                <div className="text-center">
                    <Link href="/"><a>ir al home</a></Link>
                    <span> ---- </span>
                    <Link href="/main"><a>ir al dashboard</a></Link>
                </div>
            </div>
            :
            <div>
                <div className="text-center">
                    <img className="image" src="/images/userIcon.png" />
                </div>
                <div className="paddingTop20">
                    <Form baseColor='#c55a11' />
                </div>
            </div>
        }

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
            .image {
                max-width: 100px;
            }
            `
        }</style>
    </div>;
}

export default LoginComponent;