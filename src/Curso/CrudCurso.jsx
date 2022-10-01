import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";


const EscolinhaCadastroCursos = () => {
    
    const { register, handleSubmit, setValue, setFocus } = useForm();
  
    const onSubmit = async (data) => {
      console.log(data);
      await axios.post("http://localhost:5205/api/curso", {
        ...data,
      });
    };


    return (
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>

          <div className="field">
              <label className="label">Código do Curso: </label>
              <input
                className="form-input"
                type="number"
                placeholder="codCurso"
                {...register("codCurso")}
              />
            </div>

            <div className="field">
              <label className="label">nome:</label>
              <input
                className="form-input"
                type="text"
                placeholder="nomeCurso"
                {...register("nomeCurso")}
              />
            </div>
            <div className="field">
              <label className="label">Periodo: </label>
              <input
                className="form-input"
                type="text"
                placeholder="periodo"
                {...register("periodo")}
              />
            </div>
    
            <div className="field">
              <button className="button is-primary">Save</button>
            </div>
          </form>
        </div>
      );
    };
    
    export default EscolinhaCadastroCursos;
