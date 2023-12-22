import React from "react";
import Styles from "./Card.module.css";

const Card = ({data, type})=>{
    const getCard = (type)=>{
        switch(type){
            case "album":{
                const {image, title, follows, songs, slug} = data;
                return <>
                    <Tooltip title={`${songs.length} songs`} placement="top" arrow  >
                        <a href={`/album/${slug}`}>
                            <div className={Styles.wrapper}>
                                <div className={Styles.card}>
                                    <img src={image} alt="song" loading="lazy" />
                                    <div className={Styles.banner}>
                                        <Chip 
                                            label={`${follows} Follows`}
                                            size="small"
                                            className={Styles.chip}
                                        />
                                    </div>
                                </div>
                                <div className={Styles.titleWrapper}>
                                    <p>{title}</p>
                                </div>
                            </div>
                        </a>
                    </Tooltip>
                </>
            }
            case "song":{
                const {image,likes,title} = data;
                return <>
                    <div className={Styles.wrapper}>
                        <div className={Styles.card}>
                            <img src={image} alt="song" loading="lazy" />
                            <div className={Styles.banner}>
                                <div className={Styles.pill}>
                                    <p>{likes} Likes</p>
                                </div>
                            </div>
                        </div>
                        <div className={Styles.titleWrapper}>
                            <p>{title}</p>
                        </div>
                    </div>
                </>
            }
            default:
                return<></>
        }
    
    }

    return getCard(type);
}

export default Card;