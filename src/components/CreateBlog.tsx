import {Editor} from '@tinymce/tinymce-react'
import { useRef } from 'react';
import {Editor as TinyMceEditor} from 'tinymce';
function CreateBlog() {
   const editorRef = useRef<TinyMceEditor | null>(null);
   const contentRef = useRef<string>("");
   function handleContentChange(content: string){
    contentRef.current = content;
   }
  return (
    <>
      <div className="card w-100 rounded-4 border-1 border-secondary">
        <div className="card-body">
          <p className="fs-3 fw-bold">Create Blog Post</p>
          <hr />
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control form-control-lg fs-6 py-3"
              id="title"
              placeholder="Blog Title"
            />
            <label htmlFor="title" className="text-secondary">
              Blog Title
            </label>
          </div>
          <div className="form-floating mb-3">
            <select className="form-select form-select-lg fs-6" id="category">
              <option value="">Select a Category</option>
              <option value="Projects">Projects</option>
              <option value="News">News</option>
              <option value="AI & Machine Learning">
                AI & Machine Learning
              </option>
              <option value="Collaborations">Collaborations</option>
              <option value="Instructions">Instructions</option>
              <option value="Events">Events</option>
              <option value="Career Pathways">Career Pathways</option>
            </select>
            <label htmlFor="category">Category</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="file"
              className="form-control form-control-lg fs-6"
              id="iamge"
              placeholder="Select an Image for Banner..."
            />
            <label htmlFor="image">Blog's Banner</label>
          </div>
          <div className="form-floating mb-3">
            <Editor
              apiKey="d9z39elok5kewan1p7d8ldv5h0f2omeosnrhcs81c07rvm82"
              onInit={(_evt, editor) => (editorRef.current = editor)}
              value={contentRef.current}
              onEditorChange={handleContentChange}
              init={{
                // height: 600,
                menubar: true,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount",
                ],
                toolbar:
                  "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
                skin: "snow",
                content_css: "white",
              }}
            />
          </div>
          <div className="mb-3">
            <button className="btn btn-dark btn rounded-4 fs-4 fw-bold float-end">
              CREATE BLOG
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateBlog;
