import React from 'react';

const Searchbar = (props) => {
    return (
        <div className="container">
            <div className="row">
                <section className="col s4 offset-s4">
                    <form action="" onSubmit={props.handleSubmit}>
                        <div className="input-field">
                        <span className="grey-text text-lighten-5">
                            <input placeholder="Search a Movie" type="text" onChange={props.handleChange}/>
                        </span>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default Searchbar;