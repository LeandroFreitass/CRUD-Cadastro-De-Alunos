import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";


const EscolinhaCadastroAlunos = () => {
    
    const { register, handleSubmit, setValue, setFocus } = useForm();
  
    const onSubmit = async (data) => {
      console.log(data);
      await axios.post("http://localhost:5205/api/aluno", {
        ...data,
      });
    };


    return (
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="field">
              <label className="label">ra</label>
              <input
                className="form-input"
                type="number"
                placeholder="ra"
                {...register("ra")}
              />
            </div>
            <div className="field">
              <label className="label">nome:</label>
              <input
                className="form-input"
                type="text"
                placeholder="nome"
                {...register("nome")}
              />
            </div>

            <div className="field">
              <label className="label">Curso: </label>
              <input
                className="form-input"
                type="text"
                placeholder="codCurso"
                {...register("codCurso")}
              />
            </div>
    
            <div className="field">
              <button className="button is-primary">Save</button>
            </div>
          </form>
        </div>
      );
    };
    
    export default EscolinhaCadastroAlunos;
