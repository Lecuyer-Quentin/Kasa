
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useEffect, useReducer} from 'react';


export default function Carrousel({ slides }) {
    // On utilise useReducer pour gérer l'état du carrousel
    const [state, dispatch] = useReducer(reducer, {
        currentSlide: 0,
        slides: slides,
        isAutoPlay: false,
        isHideArrows: false,
    });

    function reducer(state, action) {
        // On utilise un switch pour déterminer quelle action effectuer
        switch (action.type) {
            // Suivant l'action, on récupère l'état actuel et on le met à jour
            case 'ARROWS_HIDE':
                return {
                    ...state,
                    isHideArrows: slides.length <= 1 ? true : false,
                };
            case 'SLIDE_NEXT':
                return {
                    ...state,
                    currentSlide: state.currentSlide === slides.length - 1 ? 0 : state.currentSlide + 1,
                };
            case 'SLIDE_PREVIOUS':
                return {
                    ...state,
                    currentSlide: state.currentSlide === 0 ? slides.length - 1 : state.currentSlide - 1,
                };
            case 'AUTO_PLAY':
                return { ...state, isAutoPlay: action.payload };
            
            default:
                throw new Error();
        }
    }

    // On utilise useEffect pour gérer le changement de slide automatique
    useEffect(() => {
        if (!state.isAutoPlay) {
            const interval = setInterval(() => {
                dispatch({ type: 'SLIDE_NEXT' });
            }, 3500);
            return () => {
                clearInterval(interval);
            };
        };
    });

    useEffect(() => {
        dispatch({ type: 'ARROWS_HIDE' });
    }, []);

    // On utilise useCallback pour éviter de créer une nouvelle fonction à chaque render
    const handleMouseOver = useCallback(() => {
        dispatch({ type: 'AUTO_PLAY', payload: true });
    }, []);

    const handleMouseOut = useCallback(() => {
        dispatch({ type: 'AUTO_PLAY', payload: false });
    }, []);

    const goToNextSlide = useCallback(() => {
        dispatch({ type: 'SLIDE_NEXT' });
    }, []);

    const goToPreviousSlide = useCallback(() => {
        dispatch({ type: 'SLIDE_PREVIOUS' });
    }, []);
    

    return (
        <div className="carrousel"            
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            {!state.isHideArrows && (
                <>
                    <i onClick={goToPreviousSlide} className="carrousel__left-arrow">
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </i>
                    <i onClick={goToNextSlide} className="carrousel__right-arrow">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </i>
                </>
            )}

            <div className="carrousel__container" >
                {slides.map((_slide, index) => (
                    <img key={index} src={slides[state.currentSlide]} alt={`${index}`}
                        className='carrousel__container__slide' 
                    ></img>
                ))}                       
            </div>      
        </div>
    )
}