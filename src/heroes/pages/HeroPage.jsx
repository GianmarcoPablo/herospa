import { useParams,Navigate,useNavigate} from "react-router-dom"
import { getHeroById } from "../helpers"
import { useMemo } from "react"

const HeroPage = () => {

    const { heroId} = useParams()
    const navigate = useNavigate()
    
    const hero = useMemo(() => getHeroById(heroId), [heroId])

    const { superhero,publisher,alter_ego,first_appearance,characters } = hero

    if(!hero) {
        return <Navigate to="/marvel" />
    }

    const onBack = () => {
        //navigate a marvel
        if(publisher === 'Marvel Comics'){
            navigate('/marvel')
        }else{
            navigate('/dc')
        }
    }
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={`/assets/heroes/${heroId}.jpg`}
                    alt={superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-8">
                <h3 className="animate__animated animate__zoomInUp">{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego: </b>{alter_ego}</li>
                    <li className="list-group-item"><b>Publisher: </b>{publisher}</li>
                    <li className="list-group-item"><b>First appearance: </b>{first_appearance}</li>
                </ul>
                <h5 className="mt-3">Characters</h5>
                <p>{characters}</p>
                <button
                    className="btn btn-outline-info"
                    onClick={onBack}
                >
                    Return
                </button>
            </div>
        </div>
    )
}

export default HeroPage