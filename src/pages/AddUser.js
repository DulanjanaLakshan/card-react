import React from "react";
import Button from "../components/buton/Buton";
import './AddUser.css'

const AddUser = () => {
    return (
        <div className='main'>
            <div className='addUser'>
                <form>
                    <div className="new-expense__controls">
                        <div className="new-expense__control">
                            <label>User Name</label>
                            <input type={'text'} placeholder={'Enter your User Name'}/>
                        </div>
                        <div className="new-expense__control">
                            <label>Age</label>
                            <input type={'number'} placeholder={'Enter your Age'}/>
                        </div>
                    </div>
                    <div className="new-expense__actions">
                        <Button childName={'Add User'} type={'submit'}/>
                    </div>
                </form>
            </div>
            <div>

            </div>
        </div>
    );
}
export default AddUser;