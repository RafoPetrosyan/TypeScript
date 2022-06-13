import client from "../../services/ApiClient";

export const userListRequest = async () => {
    const { data } = await client.get(`user`);
    return data;
}