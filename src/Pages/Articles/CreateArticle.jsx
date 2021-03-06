import React, { useContext, useState, useEffect } from 'react';
import { GlobalState } from '../../GlobalState';
import Loading from '../../Loading';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import NavBar2 from '../../Components/NavBar/NavBar2';
import Footer from '../../Components/Footer/Footer';
import './CreateArticle.css';
import ReactMarkdown from 'react-markdown'
import marked from 'marked';

const initialState = {
    article_id: '',
    title: '',
    subtitle: '',
    description: 'Description',
    markdown: 'Markdown',
    category: '',
    id: ''
}

function CreatArticle() {
    const state = useContext(GlobalState)
    const [article, setArticle] = useState(initialState)
    const [images, setImages] = useState(false)
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const param = useParams()
    const [articles] = state.articlesAPI.articles
    const [onEdit, setOnEdit] = useState(false)
    const [callback, setCallback] = state.articlesAPI.callback

    useEffect(() => {
        if (param.id) {
            setOnEdit(true)
            articles.forEach(article => {
                if (article._id === param.id) {
                    setArticle(article)
                    // setImages(article.images)
                }
            })
        } else {
            setOnEdit(false)
            setArticle(initialState)
            // setImages(false)
        }
    }, [param.id, articles])

    const styleUpload = {
        display: images ? "block" : "none"
    }
    const handleUpload = async e => {
        e.preventDefault()
        try {
            const file = e.target.files[0]
            if (!file) return alert("File not exist")
            if (file.size > 1024 * 1024) return alert("Size too large")
            if (file.type !== 'image/jpeg' && file.type !== 'image/png') return alert("File format is incorrect")

            let formData = new FormData()
            formData.append('file', file)

            setLoading(true)

            const res = await axios.post('/api/upload', formData, {
                headers: { 'content-type': 'multipart/form-data' }
            })
            setLoading(false)
            setImages(res.data.result)
            console.log(res.data.result)

        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const handleDestory = async e => {
        try {
            setLoading(true)
            await axios.post('/api/destroy', { public_id: images.public_id })
            setLoading(false)
            setImages('')
            history.push('/blog')
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const handleChangeInput = e => {
        const { name, value } = e.target
        setArticle({ ...article, [name]: value })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            if (!images) return alert("No Image Upload")
            if (onEdit) {
                await axios.put(`/api/articles/${article._id}`, { ...articles, images })
            } else {
                await axios.post('/api/articles', { ...article, images })
                setImages(false)
                setArticle(initialState)
            }
            setCallback(!callback)

            history.push('/blog')
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <>
            <NavBar2 />
            <div className="create_article" >
                <div className="container fluid col-md-12">
                    <div id="signupbox" >
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <div className="panel-title text-center"><h3>Add Article</h3></div>
                            </div>
                            <div className="panel-body" >
                                <form className="row g-3" onSubmit={handleSubmit}>
                                    <div className="col-md-6">
                                        <div id="div_p_name" className="form-group required">
                                            <label for="p_name" className="control-label col-md-4  requiredField">Title<span className="asteriskField">*</span> </label>
                                            <div className="controls col-md-8 ">
                                                <input className="input-md emailinput form-control mb" placeholder="Enter Article Name" type="text"
                                                    name="title" 
                                                    required value={article.title}
                                                    onChange={handleChangeInput}
                                                // disabled={onEdit}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div id="div_p_name" className="form-group required">
                                            <label for="p_name" className="control-label col-md-4  requiredField">Subtitle<span className="asteriskField">*</span> </label>
                                            <div className="controls col-md-8 ">
                                                <input className="input-md emailinput form-control mb" placeholder="Enter Article Name" type="text"
                                                    name="subtitle" 
                                                    required value={article.subtitle}
                                                    onChange={handleChangeInput}
                                                // disabled={onEdit}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div id="div_p_id" className="form-group required">
                                            <label for="p_id" className="control-label col-md-4  requiredField">Article Id<span className="asteriskField">*</span> </label>
                                            <div className="controls col-md-8 ">
                                                <input className="input-md emailinput form-control mb"
                                                    name="article_id"
                                                    required value={article.article_id}
                                                    onChange={handleChangeInput}
                                                    placeholder="Enter Project Id" type="text" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div id="div_id_downloads" className="form-group required">
                                            <label for="p_downloads" className="control-label col-md-4  requiredField">Article Language<span className="asteriskField">*</span> </label>
                                            <div className="controls col-md-8 ">
                                                <select name="cars" type="number" className="form-control mb" >

                                                    <option value="volvo">Java</option>
                                                    <option value="saab">Python</option>
                                                    <option value="fiat">JavaScript</option>
                                                    <option value="audi">Software Engineer</option>

                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div id="div_description" className="form-group required">
                                            <label for="p_name" className="control-label col-md-4  requiredField">Description<span className="asteriskField">*</span> </label>
                                            <div className="controls col-md-8 ">
                                                <textarea className="mb"
                                                    name="description"
                                                    required value={article.description}
                                                    onChange={handleChangeInput}
                                                    style={{ width: '100%' }}
                                                    rows="5"
                                                    cols="50"
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div id="div_id_image" className="form-group required">
                                            <label for="id_image" className="control-label col-md-4  requiredField">Article Image<span className="asteriskField">*</span> </label>
                                            <div className="controls col-md-8 mb upload" >

                                                <input className="input-md emailinput form-control mb"
                                                    name="file" id="file_up"
                                                    onChange={handleUpload}
                                                    placeholder="Enter Project Id" type="file" />

                                                {
                                                    loading ?
                                                        <div id="file_img"><Loading /></div>
                                                        :
                                                        <div id="file_img" style={styleUpload}>
                                                            <img src={images ? images.url : ''} alt="" />
                                                            <span onClick={handleDestory}>X</span>
                                                        </div>

                                                }

                                            </div>
                                        </div>
                                    </div>

                                    {/* <ReactMarkdown source={input} className="markdown" /> */}
                                    <div className="col-md-12">
                                        <div id="div_description" className="form-group required row">
                                            <label for="p_name" className="text-center control-label col-md-12 requiredField">Markdown<span className="asteriskField">*</span> </label>
                                            <div className="controls col-md-6 ">
                                                <h5 className="text-center">Enter your markdown</h5>
                                                <textarea className="preview d-flex jusify-self-center mauto mb"
                                                    name="markdown"
                                                    required value={article.markdown}
                                                    onChange={(e) => setInput(e.target.value)}
                                                    value={input}
                                                ></textarea>
                                            </div>
                                            <div className="col-6" id="perview">
                                                <h5 className="text-center">See the result</h5>
                                                <div className="preview" dangerouslySetInnerHTML={{ __html: marked(input) }}>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <div className="mauto maxwidth col-md-12 text-center d-flex justify-content-center">
                                            <br />
                                            <button className="btn btn-info btn-md" type="submit">Add Article</button>
                                            <button className="btn btn-danger btn-md" type="reset"><a href="/blog">Cancel</a> </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{ background: 'rgb(235,183,65)', width: '100%' }} />
            <Footer />
        </>
    )
}

export default CreatArticle;