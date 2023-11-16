import { useEffect, useState } from "react";
import IQuery from "./Types/ITitles";

export default function useFetch<T>({ url }: { url: string }) {
    const [dados, setDados] = useState<IQuery | null>();
    const [erro, setErro] = useState('');
    

    return { dados, erro }
}