import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { recommendationActions } from '../../../_actions';


function RecommendationList(props) {
    const { match } = props;

    console.log(match.params.movie_id);
    const recommendations = useSelector(state => state.recommendations);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(recommendationActions.getAllByMovie(match.params.movie_id));
    }, [dispatch]);

    return (
        <div className="">
            <h3>Recommendaton List</h3>
            {recommendations.items &&
                <ul>
                    {recommendations.items.map((recommendation, index) =>
                        <li key={recommendation.id}>
                            <span>{recommendation.title}</span>
                        </li>

                    )}
                </ul>
            }
        </div>
    );
}

export { RecommendationList };