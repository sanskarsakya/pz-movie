import React, { useEffect } from 'react';
import { actorActions } from '../../../actions';
import { useDispatch, useSelector } from 'react-redux';


function ActorList(props) {
    const { match } = props;

    console.log(match.params.movie_id);
    const actors = useSelector(state => state.actors);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('adsf')
        dispatch(actorActions.getAllByMovie(match.params.movie_id));
    }, [dispatch]);

    return (
        <div className="">
            <h3>ActorList</h3>
            {actors.items &&
                <ul>
                    {actors.items.map((actor, index) =>
                        <li key={actor.cast_id}>
                            <span>{actor.name}</span>
                        </li>

                    )}
                </ul>
            }
        </div>
    );
}

export { ActorList };