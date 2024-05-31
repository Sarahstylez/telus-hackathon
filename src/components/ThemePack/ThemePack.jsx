import './ThemePack.scss';

export default function ThemePack({ themePack }) {
    return (<>

        <div className="themePack">
            <div className="themePack__top-container">
                <h2 className="top-container__heading">{themePack.name}</h2>
                <label className="top-container__label">{themePack.label}</label>
            </div>
            <div className="themePack__card-container">
                {/* <div className="card-container__card"> */}
                    {/* <input className="card__checkbox" input="checkbox" />
                    <img className="card__img" src={themePack.image} /> */}
                    {themePack.shows.map(obj => {
                        return (
                            <div className="card-container__card">
                                <input className="card__checkbox" type="checkbox" />
                                <img className="card__img" src={obj.image} />
                                
                            </div>
                        );
                    })}
                {/* </div> */}
            </div>

            <h3 className="themePack__price">$9/mo.</h3>
        </div>
    </>
    )
}