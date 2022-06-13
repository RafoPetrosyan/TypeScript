import React, {FC, useEffect} from "react";
import { useDispatch } from "react-redux";
import { fetchUserRequest } from "../../store/actions/users";
import { useTypedSelector } from "../../store/hooks/useTypedSelector";

const Users: FC = () => {
    const dispatch = useDispatch();
    const { users } = useTypedSelector(state => state.user);

    console.log(users)

    useEffect(() => {
        dispatch(fetchUserRequest());
    }, [])

    return (
        <div>
            users
        </div>
    )
}
export default Users;