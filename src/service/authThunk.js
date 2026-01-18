import { createAsyncThunk } from "@reduxjs/toolkit";

let data_set = [
    {id:"aaa", password:"aaa", role:"USER"},
    {id:"bbb", password:"bbb", role:"USER"},
    {id:"ccc", password:"ccc", role:"USER"},
    
]                         

export const loginThunk = createAsyncThunk(
    "loginThunk",
    async(user) => {
        const data = data_set.filter(data=>data.id === user.id)[0]
        let  result = 1;
        if(data.password === user.password)
            result = 0;
        return{result, username:user.id};
    }
);

export const registerThunk = createAsyncThunk(
    "registerThunk",
    async(newUser, {rejectWithValue}) => {
        const isExist = data_set.some(user=>user.id === newUser.id);
        if(isExist){
            return rejectWithValue("이미 존재하는 아이디입니다.")
        }
        
        const user = {
            id : newUser.id,
            password : newUser.password,
            role : "USER"
        };
        data_set.push(user);
        return {success:true};
    }
)

export const getAllMembersThunk = createAsyncThunk(
    "getAllMembersThunk",
    async (_, {rejectWithValue}) => {
        try{
            const response = [...data_set];
            return response;
        }catch(error){
            return rejectWithValue('실패')
        }
    }
)

export const getMemberDetailThunk  = createAsyncThunk(
    "getMemberDetailThunk",
    async (id, {rejectWithValue}) => {
        try{
            const member = data_set.find(user => user.id === id);
            
            if (!member) {
                return rejectWithValue("존재하지 않는 사용자입니다.");
            }
            return member; 
        } catch (error) {
            return rejectWithValue("데이터를 가져오는 중 오류가 발생했습니다.");
        }}
)

export const deleteMemberThunk = createAsyncThunk(
    "deleteMemberThunk",
    async (id, { rejectWithValue }) => {
        try {
            data_set = data_set.filter(user => user.id !== id);
            return id; 
        } catch (error) {
            return rejectWithValue("삭제 중 오류가 발생했습니다.");
        }
    }
);

export const updateMemberThunk = createAsyncThunk(
    "updateMemberThunk",
    async(updateUser, {rejectWithValue}) => {
        try{
            const index = data_set.findIndex(user => user.id === updateUser.id)
            if(index !== -1) {
                data_set[index] = {...data_set[index], ...updateUser};
                return data_set[index];
            }
            return rejectWithValue("유저를 찾을 수 없습니다.")
        } catch (error){
            return rejectWithValue("수정 중 오류가 발생하였습니다.")
        }
    }
)
