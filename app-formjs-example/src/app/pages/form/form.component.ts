import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormEditor } from '@bpmn-io/form-js';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  @ViewChild('formjsContainer', { static: true }) editorContainer!: ElementRef;

  editor: any;

  ngOnInit() {
    // Inicializa o editor de formulário
    this.editor = new FormEditor({
      container: this.editorContainer.nativeElement
    });

    // Um schema básico de exemplo
    const schema = {
      type: 'default',
      components: []
    };

    // Importar o schema vazio para começar
    this.editor.importSchema(schema);
  }

  ngOnDestroy() {
    // Destruir o editor quando o componente for destruído
    if (this.editor) {
      this.editor.destroy();
    }
  }

}
