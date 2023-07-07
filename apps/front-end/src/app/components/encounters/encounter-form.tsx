import React, { useEffect, useState } from "react";
import { useLoaderData } from 'react-router-dom';
import { getFormByEncounterType } from "../../forms/form-service";
import { FormSchema } from "../../forms/types";
import FormRenderer from "../../forms/form-renderer/form-renderer";


const EncounterForm: React.FC = ()=>{
    const data = useLoaderData() as { 
        encounterTypeUuid: string;
        uuid: string;
        visitUuid: string;
    };
    const [form,setForm] = useState<FormSchema>();

    useEffect(()=>{
        const f = getFormByEncounterType(data.encounterTypeUuid);
       setForm(f);
    },[data.encounterTypeUuid]);
    return(
    <div>
    { form ?
        <FormRenderer formSchema={form} /> : ''
    }
    </div>
    );

}

export default EncounterForm;