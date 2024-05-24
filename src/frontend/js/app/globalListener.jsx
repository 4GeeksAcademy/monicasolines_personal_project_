import React from "react"
import { useLocation } from "react-router-dom"
import { Context } from "../store/appContext.jsx"
import Constants from "./constants.js"

/**
 * This is probably one of the most usefull and needed shit i've realized any project should have
 * it's just a component that u place at the root of the page, in layout, then u write here any 
 * short of listeners that should work globally, independent of the page you are in
 * 
 * it renders nothing, it just acts as a passive component that acts right on the page or the store
 */
const GlobalListener=()=>{
  const 
    { language, store, actions }= React.useContext(Context),
    location= useLocation()

  /** -------------------------------------------------------------------------- LANG/STATE EFFECTS */

  React.useEffect(()=>{
    actions.setStoreDirty(Constants.STORE_DIRTY.location)
    setTimeout(refreshPageTitle, 25)
  },[location])
  
  React.useEffect(()=>{
    refreshPageTitle()
  },[language])

  React.useEffect(()=>{
    if(store.userPrefs.language !== undefined) actions.loadLanguage(store.userPrefs.language)
  },[store.userPrefs.language])

  /** -------------------------------------------------------------------------- DARKMODE */

  // applies darkMode changes to actual page
  React.useEffect(()=>{
    if(store.userPrefs.darkMode) document.body.setAttribute("data-darkmode","👍")
    else document.body.removeAttribute("data-darkmode")
  },[store.readyState.frontend, store.userPrefs.darkMode])

  /** -------------------------------------------------------------------------- HOVER BOX */

  React.useEffect(()=>{
    window.addEventListener("mousemove", handleHoverBox)
    return ()=>{ window.removeEventListener("mousemove", handleHoverBox)}
  },[])

  function handleHoverBox(e){
    if(e.target){
      const t= e.target
      if(t.getAttribute("data-hover")){
        
      }
    }
  }

  /** -------------------------------------------------------------------------- TITLE UPDATER */
  
  function refreshPageTitle(){ // from location effect
    const 
      path= window.location.href.match(/(?<=\/)[^:\.\/]+($|(?=\/))/),
      titleroot= language.get("title._root")

    let title= titleroot

    if(path && path[0]){
      const 
        pathname= path[0],
        pathnameLocalized= language.get("title", pathname)
      title= (pathnameLocalized ? pathnameLocalized + language.get("title._sep") : "") + titleroot
      if(store[pathname]) title= store[pathname].title + language.get("title._sep") + title
    }
    document.title= title
  }

  /** -------------------------------------------------------------------------- TODO: global redirect listener */

  /** -------------------------------------------------------------------------- TODO: global userState listener */
  

  /** -------------------------------------------------------------------------- SIDE EFFECTS */

  React.useEffect(()=>{ if(store.dirty & Constants.STORE_DIRTY.location) actions.unsetStoreDirty(Constants.STORE_DIRTY.location) },[store.dirty])
}

export default GlobalListener