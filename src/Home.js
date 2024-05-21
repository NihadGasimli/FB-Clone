import style from "./Home.module.css";
import gifLogo from "./images/314992_gif_file_icon.png";
import { useState, useRef, useContext } from "react";
import { context } from "./Contexts/Context";
export default function Home() {

    const [state, dispatch] = useContext(context);
    const [openModal, setOpenModal] = useState("none");
    const [gifSelectedOrNo, setGifSelectedOrNo] = useState("none");
    const [gifName, setGifName] = useState([]);

    const apiInput = useRef();
    const textareaInput = useRef();

    function onclickGifBtn(e) {
        e.preventDefault();
        if (openModal === "none") {
            setOpenModal("flex");
            fetch(`https://api.giphy.com/v1/gifs/search?api_key=IunDZRBqAiaiIulBudp4Elej0Y5e6ScO&q=dog&limit=52&offset=25&rating=&lang=en&bundle=messaging_non_clips`, {
                method: "GET"
            }).then(
                function (response) {
                    return response.json();
                }
            ).then(
                function (result) {
                    if (gifName.length === 0) {
                        setGifName(result.data)
                    }
                }
            )
        }
        else {
            setOpenModal("none")
        }
    }

    function onclickGifImage(src) {
        dispatch({ method: "gif", payload: src });
        setGifSelectedOrNo("block");
    }

    function onclickAddBtn(e) {
        e.preventDefault();
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=IunDZRBqAiaiIulBudp4Elej0Y5e6ScO&q=${apiInput.current.value}&limit=52&offset=25&rating=&lang=en&bundle=messaging_non_clips`, {
            method: "GET"
        }).then(
            function (response) {
                return response.json();
            }
        ).then(
            function (result) {
                setGifName(result.data)
                apiInput.current.value = "";
            }
        )
    }

    function onclickDeleteGifBtn(e) {
        e.preventDefault();
        setGifSelectedOrNo("none");
    }

    function onclickCloseGifsModalBtn(e) {
        e.preventDefault();
        setOpenModal("none")
    }

    function onclickPostBtn(e) {
        e.preventDefault();
        dispatch({ method: "post", payload: textareaInput.current.value });
        textareaInput.current.value = "";
        setGifSelectedOrNo("none");
        dispatch({ method: "gif", payload: "" });
        setOpenModal("none");
    }

    return (
        <>
            <div id="container" className={style.container}>
                <div className={style.addPostDiv}>
                    <h1>Add post</h1>
                    <div className={style.inputAndGif}>
                        <textarea placeholder="What do you think?" className={style.inputPost} ref={textareaInput}>
                        </textarea>
                        <div className={style.gifAndDeleteDiv} style={{ display: gifSelectedOrNo }}>
                            <img alt="" src={state.selectedGif} className={style.selectedGif} />
                            <button onClick={(e) => { onclickDeleteGifBtn(e) }}>X</button>
                        </div>
                    </div>
                    <div className={style.others}>
                        <img alt="" src={gifLogo} className={style.gifLogo} onClick={(e) => { onclickGifBtn(e) }} />
                        <div className={style.openedGifs} style={{ display: openModal }}>
                            <button className={style.closeOpenedGifModalBtn} onClick={(e) => { onclickCloseGifsModalBtn(e) }}>X</button>
                            <div className={style.openedGifs_InputDeviceInfo}>
                                <input type="text" className={style.gifInput} ref={apiInput} />
                                <button className={style.addGifBtn} onClick={(e) => { onclickAddBtn(e) }}>Add</button>
                            </div>
                            <div className={style.gifs}>
                                {gifName.map((item, index) => {
                                    return (<>
                                        <img alt="" key={index} src={item.images.original.webp} className={style.gifImage} onClick={() => { onclickGifImage(item.images.original.webp) }} />
                                    </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <button className={style.addBtn} onClick={(e) => onclickPostBtn(e)}>Post</button>
                </div>


                
            </div>
        </>
    )
}