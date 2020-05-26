import React, { Fragment, useState } from 'react';
import Bag from './../images/bag.png';
import BrokenBag from './../images/bag-burst.png';


const BoxRoom = () =>{
    const [bagHealth, setBagHealth] = useState(100);
    const [damage, setDamage] = useState(10);
    const [healthBar, setHealthBar] = useState(100);

    const updateHealth = () =>{ 
        const newHealth = bagHealth > 0 ? bagHealth - damage : 0;
        const newHealthBar = healthBar > 0 ? healthBar - damage : 0
        setHealthBar(newHealthBar);
        setBagHealth(newHealth);
    }

    const resetBagStats = () => { 
        setBagHealth(100);
        setHealthBar(100);
    }

    return(
        <Fragment>
            <div className="container">
                <div className="col ">
                    <img src={ bagHealth >= 10 ? Bag : BrokenBag } alt="Punch Bag"></img>     
                </div>
                <div className="col">
                    <div className="progress border border-dark">
                        <div className="progress-bar bg-danger" role="progressbar" style={{width: healthBar + '%'}} aria-valuenow={healthBar} aria-valuemin="0" aria-valuemax="100">{healthBar}</div>
                    </div>
                </div> 
                <div className="col">
                    <br />
                    <button className="btn btn-success col-2" onClick={ updateHealth }>Punch</button>
                    <button className="btn btn-warning col-2 offset-md-1" onClick={ resetBagStats }>Reset</button>
                </div> 
            </div>
        </Fragment>
    );
}

export default BoxRoom;