
import { accessories_type } from "../../constants/filterConstant";
export const loadAccessoriesHandler = (accessories: string) => {
    return {
        type : accessories_type,
        payload : accessories
    }
}