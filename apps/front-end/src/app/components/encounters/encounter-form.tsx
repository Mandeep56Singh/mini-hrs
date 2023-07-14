import React, { useEffect, useState } from "react";
import { useLoaderData } from 'react-router-dom';
import { getFormByEncounterType } from "../../forms/form-service";
import { FormSchema } from "../../forms/types";
import FormRenderer from "../../forms/form-renderer/form-renderer";
import { createEncounterAnswers } from "../../resources/answers.resource";
import { EncounterAnswers } from "../../models/answer";


const EncounterForm: React.FC = ()=>{
    const data = useLoaderData() as { 
        encounterTypeUuid: string;
        uuid: string;
        visitUuid: string;
        encounterUuid: string;
    };
    const [form,setForm] = useState<FormSchema>();
    useEffect(()=>{
        const f = getFormByEncounterType(data.encounterTypeUuid);
       setForm(f);
    },[data.encounterTypeUuid]);

    const handleSaveForm = (formData: any)=>{
         const payload = {
            encounterUuid: data.encounterUuid,
            answers: formData
         };
         console.log('payload', payload);
         addEncounterAnswers(payload);
    };
    const addEncounterAnswers = (payload: EncounterAnswers)=>{
         createEncounterAnswers(payload).then((result)=>{
            console.log('result', result);
         }).catch((error)=>{
            console.log('error', error);
         });;
    };
    return(
    <div>
    { form ?
        <FormRenderer formSchema={form} onSave={handleSaveForm}/> : ''
    }
    </div>
    );

}

export default EncounterForm;