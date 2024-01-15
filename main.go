package main

import (
	"fmt"
	"html/template"
	"net/http"
)

var tpl *template.Template

func main() {
	tpl, _ = tpl.ParseGlob("templates/*.html")
	http.HandleFunc("/", indexHandleFunc)

	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))
	http.Handle("/data/", http.StripPrefix("/data/", http.FileServer(http.Dir("data"))))

	http.ListenAndServe(":8080", nil)
}

func indexHandleFunc(w http.ResponseWriter, r *http.Request) {
	fmt.Println("indexHandleFunc runnig...")
	tpl.ExecuteTemplate(w, "index.html", nil)
}
