import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import AddLinkDialog from "./AddLinkDialog";
import LinkItem from "./LinkItem";

const LinksListView = ({ title, category }) => {
  // const BASE_URL = `http://localhost:8000/api/v1/`;
  const BASE_URL = `https://links-hub-d.herokuapp.com/api/v1/`;
  const defaultValues = {
    name: '',
    code: '',
    description: '',
    category,
  };

  const { register, handleSubmit, reset } = useForm({
    defaultValues,
  });
  const [linksData, setLinks] = useState([]);

  async function getLinks() {
    try {
      const resp = await fetch(BASE_URL + 'links/?' + new URLSearchParams({
        category,
      }));
      const respJson = await resp.json();
      setLinks(respJson.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getLinks();
    // eslint-disable-next-line
  }, []);

  async function createLink(data = {}) {
    try {
      const response = await fetch(BASE_URL + 'link/', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const { data: respData } = await response.json();
      setLinks([...linksData, respData]);
    } catch (e) {
      console.log(e);
    }
  }

  async function deleteLink(id) {
    try {
      const response = await fetch(BASE_URL + 'link/' + id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const { data } = await response.json();
      setLinks([...linksData.filter(link => link._id !== data._id)]);
    } catch (e) {
      console.log(e);
    }
  }

  const onSubmit = vals => {
    createLink(vals);
    // sorry for this shit
    document.getElementById(`exampleModal${category}`).click();
    reset(defaultValues);
  }

  const handleResetForm = () => {
    reset(defaultValues);
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-10">
          <h1 className="display-6 mt-3">{title}</h1>
        </div>
        <div className="col-sm-2">
          <button
            type="button"
            className="btn btn-primary mt-4"
            data-bs-toggle="modal"
            data-bs-target={`#exampleModal${category}`}
          >
            Add link
          </button>
          <AddLinkDialog
            register={register}
            onSubmit={handleSubmit(onSubmit)}
            reset={handleResetForm}
            category={category}
          />
        </div>
      </div>
      <hr />
      {!linksData.length && (<h4>Ooops... Still no resources :(</h4>)}
      {linksData?.map((link) => (
        <LinkItem link={link} key={link._id} handleDelete={deleteLink} />
      )
      )}
    </>
  );
}

export default LinksListView;
