import React from 'react';

//in this layout we use the prop title and subtitle and openPopup (just for modals) and goTo (to redirect)

export default props => <div className="container card">
    {props.title && <div className="row">
        <h6 className={`title ${(props.subtitle ? 'col-6' : 'col-12')}`}>{props.title}</h6>
        {props.subtitle && <div className="col-6 subtitle">
            {props.openPopup ?
                <button type="button" className="btn btn-link" data-toggle="modal" data-target={`#${props.openPopup}`}>{props.subtitle}</button>
                :
                <button type="button" className="btn btn-link" onClick={props.goTo}>{props.subtitle}</button>
            }
        </div>}
    </div>}
    <div className="py-1">
        {props.children}
    </div>


    <style jsx>{`
        .card {
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            padding-top: 10px;
            padding-bottom: 10px;
            margin-top: 10px;
            margin-bottom: 10px;
        }
        .subtitle {
            text-align: right;
        }
        .title {
            text-transform: uppercase;
        }
    `}</style>
</div>