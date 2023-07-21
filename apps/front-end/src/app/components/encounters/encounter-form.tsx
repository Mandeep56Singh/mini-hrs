import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import FormRenderer from '../forms/form-renderer/form-renderer';
import { createEncounterAnswers } from '../../resources/answers.resource';
import { EncounterAnswers } from '../../models/answer';
import { useEncounterTypeForm } from '../../resources/hooks/use-encounter-type-form';
import Loader from '../loader/loader';
import ErrorAlert from '../error/error-alert';

const EncounterForm: React.FC = () => {
  const data = useLoaderData() as {
    encounterTypeUuid: string;
    uuid: string;
    visitUuid: string;
    encounterUuid: string;
  };
  const navigate = useNavigate();
  const { form, isError, isLoading, error } = useEncounterTypeForm(
    data.encounterTypeUuid
  );
  if (isError) {
    return <ErrorAlert error={error} />;
  }
  if (isLoading) {
    return <Loader />;
  }

  const handleSaveForm = (formData: any) => {
    const payload = {
      encounterUuid: data.encounterUuid,
      answers: formData,
    };
    addEncounterAnswers(payload);
  };
  const addEncounterAnswers = (payload: EncounterAnswers) => {
    createEncounterAnswers(payload)
      .then((result) => {
        redirectToVisits();
      })
      .catch((error) => {
        console.log('error', error);
      });
  };
  const redirectToVisits = () => {
    navigate(`../${data.uuid}/visits`);
  };
  return (
    <div>
      {form ? <FormRenderer form={form} onSave={handleSaveForm} /> : ''}
    </div>
  );
};

export default EncounterForm;
