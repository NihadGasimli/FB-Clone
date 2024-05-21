import style from "./Posts.module.css";
import userLogo from "./images/user-128.png";
import { useContext, useEffect, useRef, useState } from "react";
import { context } from "./Contexts/Context";
export default function Posts() {
    const [state, dispatch] = useContext(context)

    return (
        <>
            <div className={style.container} id="container">
                <div className={style.posts}>
                    <h1>Posts</h1>
                    {state.posts.map((item, index) => {
                        return (
                            <>
                                <div key={index} className={style.post}>
                                    <div className={style.userCard}>
                                        <img src={userLogo} alt="" className={style.postUserLogo} />
                                        <h1>User</h1>
                                    </div>
                                    <textarea>{item.text}</textarea>
                                    <img src={item.gif} alt="" className={style.gif} />
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}