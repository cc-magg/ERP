import React from 'react';

/**
 * the children most to have a div with the class body and a footer like this:
 * <div className="modal-body">...</div>   <div className="modal-footer">...</div>
 * 
 * the prop backdrop string can be set to static to close the modal only with the close button from the footer
 * or true to close from outside click
 * 
 * the close button is a button with data-dismiss="modal"
 * 
 * don't forget the prop title
 */

export default props => <div className="modal fade" data-backdrop={props.backdrop} id={props.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">{props.title}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            {props.children}
        </div>
    </div>
</div>