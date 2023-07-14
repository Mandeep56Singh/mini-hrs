import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();
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
         addEncounterAnswers(payload);
    };
    const addEncounterAnswers = (payload: EncounterAnswers)=>{
         createEncounterAnswers(payload).then((result)=>{
            redirectToVisits();
         }).catch((error)=>{
            console.log('error', error);
         });
    };
    const redirectToVisits = ()=>{
        navigate(`../${data.uuid}/visits`)
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