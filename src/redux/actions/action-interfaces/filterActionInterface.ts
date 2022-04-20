import { accessories_type} from '../../constants/filterConstant'
interface loadAccesories {
    type: "filter/Genx/accessories"
    payload: string
}

export type Action = loadAccesories