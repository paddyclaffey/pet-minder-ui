
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { take } from 'rxjs/operators';

@Component({
    selector: 'pm-animal-animation',
    templateUrl: './animal-animation.component.html',
    styleUrls: ['./animal-animation.component.scss']
})
export class AnimalAnimationComponent implements AfterViewInit {
    @Input() public animal: string;

    public externalHtml;

    constructor(
        private _http: HttpClient,
        private _sanitizer: DomSanitizer) {
    }

    ngAfterViewInit(): void {
        console.log(this.animal)
        const htmlUrl = `http://localhost:3000/${this.animal ? this.animal + '.html' : 'animate-animal.html'}`;
        const jsUrl = `http://localhost:3000/animate-animal.js`;
        const cssUrl = `http://localhost:3000/animate-animal.css`;
        this._http.get(jsUrl, { responseType: 'text' })
            .pipe(take(1))
            .subscribe((script: string) => {


                this._http.get(cssUrl, { responseType: 'text' })
                    .pipe(take(1))
                    .subscribe((css: string) => {
                        
                        this._http.get(htmlUrl, { responseType: 'text' })
                        .pipe(take(1))
                        .subscribe((html: string) => {
                            this.externalHtml = this._sanitizer.bypassSecurityTrustHtml(html);
                            
                            let node = document.createElement('script');
                            node.type = 'text/javascript';
                            node.appendChild(document.createTextNode(script));

                            const head = document.getElementsByTagName('head')[0];
                            const style = document.createElement('link');
                            style.rel = 'stylesheet';
                            style.type = 'text/css';
                            style.href = cssUrl;
                            head.appendChild(style);

                        });

                    });
            
            });
    }

    public loadJsCssFile(url: string, type: string) {
        let node: any;
        if (type === 'script') {
            node = document.createElement('script');
            node.src = url;
            node.type = 'text/javascript';
        } else {
            node = document.createElement('link');
            node.href = url;
            node.rel = 'stylesheet';
        }
        document.getElementsByTagName('head')[0].appendChild(node);
    }

}