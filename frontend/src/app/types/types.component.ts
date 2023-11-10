import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { checkmarkCircle, closeCircle } from 'ionicons/icons';

import { pb } from 'src/pb';

const types = [
  [
    ['agda', ' *.agda, *.lagda'],
    ['aidl', ' *.aidl'],
    ['amake', ' *.bp, *.mk'],
    ['asciidoc', ' *.adoc, *.asc, *.asciidoc'],
    ['asm', ' *.S, *.asm, *.s'],
    ['asp', ' *.ascx, *.ascx.cs, *.ascx.vb, *.aspx, *.aspx.cs, *.aspx.vb'],
    ['ats', ' *.ats, *.dats, *.hats, *.sats'],
    ['avro', ' *.avdl, *.avpr, *.avsc'],
    ['awk', ' *.awk'],
    ['bazel', ' *.BUILD, *.bazel, *.bazelrc, *.bzl, BUILD, WORKSPACE'],
    ['bitbake', ' *.bb, *.bbappend, *.bbclass, *.conf, *.inc'],
    ['brotli', ' *.br'],
    ['buildstream', ' *.bst'],
    ['bzip2', ' *.bz2, *.tbz2'],
    ['c', ' *.[chH],, *.[chH],.in, *.cats'],
    ['cabal', ' *.cabal'],
    ['cbor', ' *.cbor'],
    ['ceylon', ' *.ceylon'],
    ['clojure', ' *.clj, *.cljc, *.cljs, *.cljx'],
    ['cmake', ' *.cmake, CMakeLists.txt'],
    ['coffeescript', ' *.coffee'],
    ['config', ' *.cfg, *.conf, *.config, *.ini'],
    ['coq', ' *.v'],
    [
      'cpp',
      ' *.[ChH],, *.[ChH],.in, *.[ch],pp, *.[ch],pp.in, *.[ch],xx, *.[ch],xx.in, *.cc, *.cc.in, *.hh, *.hh.in, *.inl',
    ],
    ['creole', ' *.creole'],
    ['crystal', ' *.cr, Projectfile'],
    ['cs', ' *.cs'],
    ['csharp', ' *.cs'],
    ['cshtml', ' *.cshtml'],
    ['css', ' *.css, *.scss'],
    ['csv', ' *.csv'],
    ['cython', ' *.pxd, *.pxi, *.pyx'],
    ['d', ' *.d'],
    ['dart', ' *.dart'],
    ['dhall', ' *.dhall'],
    ['diff', ' *.diff, *.patch'],
    ['docker', ' *Dockerfile*'],
    ['dvc', ' *.dvc, Dvcfile'],
    ['ebuild', ' *.ebuild'],
    ['edn', ' *.edn'],
    ['elisp', ' *.el'],
    ['elixir', ' *.eex, *.ex, *.exs'],
    ['elm', ' *.elm'],
    ['erb', ' *.erb'],
    ['erlang', ' *.erl, *.hrl'],
    ['fidl', ' *.fidl'],
    ['fish', ' *.fish'],
    ['flatbuffers', ' *.fbs'],
    ['fortran', ' *.F, *.F77, *.F90, *.F95, *.f, *.f77, *.f90, *.f95, *.pfo'],
    ['fsharp', ' *.fs, *.fsi, *.fsx'],
    ['fut', ' .fut'],
    ['gap', ' *.g, *.gap, *.gd, *.gi, *.tst'],
    ['gn', ' *.gn, *.gni'],
    ['go', ' *.go'],
    ['gradle', ' *.gradle'],
    ['groovy', ' *.gradle, *.groovy'],
    ['gzip', ' *.gz, *.tgz'],
    ['h', ' *.h, *.hpp'],
    ['haml', ' *.haml'],
    ['haskell', ' *.c2hs, *.cpphs, *.hs, *.hsc, *.lhs'],
    ['hbs', ' *.hbs'],
    ['hs', ' *.hs, *.lhs'],
    ['html', ' *.ejs, *.htm, *.html'],
    ['idris', ' *.idr, *.lidr'],
    ['java', ' *.java, *.jsp, *.jspx, *.properties'],
    ['jinja', ' *.j2, *.jinja, *.jinja2'],
    ['jl', ' *.jl'],
    ['js', ' *.js, *.jsx, *.vue'],
    ['json', ' *.json, composer.lock'],
    ['jsonl', ' *.jsonl'],
    ['julia', ' *.jl'],
    ['jupyter', ' *.ipynb, *.jpynb'],
    ['k', ' *.k'],
    ['kotlin', ' *.kt, *.kts'],
    ['less', ' *.less'],
    [
      'license',
      ' *[.-],LICEN[CS],E*, AGPL-*[0-9],*, APACHE-*[0-9],*, BSD-*[0-9],*, CC-BY-*, COPYING, COPYING[.-],*, COPYRIGHT, COPYRIGHT[.-],*, EULA, EULA[.-],*, GFDL-*[0-9],*, GNU-*[0-9],*, GPL-*[0-9],*, LGPL-*[0-9],*, LICEN[CS],E, LICEN[CS],E[.-],*, MIT-*[0-9],*, MPL-*[0-9],*, NOTICE, NOTICE[.-],*, OFL-*[0-9],*, PATENTS, PATENTS[.-],*, UNLICEN[CS],E, UNLICEN[CS],E[.-],*, agpl[.-],*, gpl[.-],*, lgpl[.-],*, licen[cs],e, licen[cs],e.*',
    ],
    ['lisp', ' *.el, *.jl, *.lisp, *.lsp, *.sc, *.scm'],
    ['lock', ' *.lock, package-lock.json'],
    ['log', ' *.log'],
    ['lua', ' *.lua'],
    ['lz4', ' *.lz4'],
    ['lzma', ' *.lzma'],
    ['m4', ' *.ac, *.m4'],
    [
      'make',
      ' *.mak, *.mk, [Gg],[Nn],[Uu],makefile, [Gg],[Nn],[Uu],makefile.am, [Gg],[Nn],[Uu],makefile.in, [Mm],akefile, [Mm],akefile.am, [Mm],akefile.in',
    ],
    ['mako', ' *.mako, *.mao'],
    ['man', ' *.[0-9],[cEFMmpSx],, *.[0-9lnpx],'],
    ['markdown', ' *.markdown, *.md, *.mdown, *.mkdn'],
    ['matlab', ' *.m'],
    ['md', ' *.markdown, *.md, *.mdown, *.mkdn'],
    ['meson', ' meson.build, meson_options.txt'],
    ['minified', ' *.min.css, *.min.html, *.min.js'],
    ['mint', ' *.mint'],
    ['mk', ' mkfile'],
    ['ml', ' *.ml'],
    ['msbuild', ' *.csproj, *.fsproj, *.proj, *.props, *.targets, *.vcxproj'],
    ['nim', ' *.nim, *.nimble, *.nimf, *.nims'],
    ['nix', ' *.nix'],
    ['objc', ' *.h, *.m'],
    ['objcpp', ' *.h, *.mm'],
    ['ocaml', ' *.ml, *.mli, *.mll, *.mly'],
    ['org', ' *.org, *.org_archive'],
    ['pascal', ' *.dpr, *.inc, *.lpr, *.pas, *.pp'],
    ['pdf', ' *.pdf'],
    ['perl', ' *.PL, *.perl, *.pl, *.plh, *.plx, *.pm, *.t'],
    ['php', ' *.php, *.php3, *.php4, *.php5, *.phtml'],
    ['po', ' *.po'],
    ['pod', ' *.pod'],
    ['postscript', ' *.eps, *.ps'],
    ['protobuf', ' *.proto'],
    ['ps', ' *.cdxml, *.ps1, *.ps1xml, *.psd1, *.psm1'],
    ['puppet', ' *.erb, *.pp, *.rb'],
    ['purs', ' *.purs'],
    ['py', ' *.py'],
    ['qmake', ' *.prf, *.pri, *.pro'],
    ['qml', ' *.qml'],
    ['r', ' *.R, *.Rmd, *.Rnw, *.r'],
    ['racket', ' *.rkt'],
    ['rdoc', ' *.rdoc'],
    ['readme', ' *README, README*'],
    ['red', ' *.r, *.red, *.reds'],
    ['robot', ' *.robot'],
    ['rst', ' *.rst'],
    ['ruby', ' *.gemspec, *.rb, *.rbw, .irbrc, Gemfile, Rakefile, config.ru'],
    ['rust', ' *.rs'],
    ['sass', ' *.sass, *.scss'],
    ['scala', ' *.sbt, *.scala'],
    [
      'sh',
      ' *.bash, *.bashrc, *.csh, *.cshrc, *.ksh, *.kshrc, *.sh, *.tcsh, *.zsh, .bash_login, .bash_logout, .bash_profile, .bashrc, .cshrc, .kshrc, .login, .logout, .profile, .tcshrc, .zlogin, .zlogout, .zprofile, .zshenv, .zshrc, bash_login, bash_logout, bash_profile, bashrc, profile, zlogin, zlogout, zprofile, zshenv, zshrc',
    ],
    ['slim', ' *.skim, *.slim, *.slime'],
    ['smarty', ' *.tpl'],
    ['sml', ' *.sig, *.sml'],
    ['soy', ' *.soy'],
    ['spark', ' *.spark'],
    ['spec', ' *.spec'],
    ['sql', ' *.psql, *.sql'],
    ['stylus', ' *.styl'],
    ['sv', ' *.h, *.sv, *.svh, *.v, *.vg'],
    ['svg', ' *.svg'],
    ['swift', ' *.swift'],
    ['swig', ' *.def, *.i'],
    [
      'systemd',
      ' *.automount, *.conf, *.device, *.link, *.mount, *.path, *.scope, *.service, *.slice, *.socket, *.swap, *.target, *.timer',
    ],
    ['taskpaper', ' *.taskpaper'],
    ['tcl', ' *.tcl'],
    ['tex', ' *.bib, *.cls, *.dtx, *.ins, *.ltx, *.sty, *.tex'],
    ['textile', ' *.textile'],
    ['tf', ' *.tf'],
    ['thrift', ' *.thrift'],
    ['toml', ' *.toml, Cargo.lock'],
    ['ts', ' *.ts, *.tsx'],
    ['twig', ' *.twig'],
    ['txt', ' *.txt'],
    ['typoscript', ' *.ts, *.typoscript'],
    ['vala', ' *.vala'],
    ['vb', ' *.vb'],
    ['vcl', ' *.vcl'],
    ['verilog', ' *.sv, *.svh, *.v, *.vh'],
    ['vhdl', ' *.vhd, *.vhdl'],
    ['vim', ' *.vim'],
    ['vimscript', ' *.vim'],
    ['webidl', ' *.idl, *.webidl, *.widl'],
    ['wiki', ' *.mediawiki, *.wiki'],
    [
      'xml',
      ' *.dtd, *.rng, *.sch, *.xhtml, *.xjb, *.xml, *.xml.dist, *.xsd, *.xsl, *.xslt',
    ],
    ['xz', ' *.txz, *.xz'],
    ['yacc', ' *.y'],
    ['yaml', ' *.yaml, *.yml'],
    ['yang', ' *.yang'],
    ['z', ' *.Z'],
    ['zig', ' *.zig'],
    [
      'zsh',
      ' *.zsh, .zlogin, .zlogout, .zprofile, .zshenv, .zshrc, zlogin, zlogout, zprofile, zshenv, zshrc',
    ],
    ['zstd', ' *.zst, *.zstd'],
  ],
  [
    ['actionscript', '.as .mxml'],
    ['ada', '.ada .adb .ads'],
    ['asciidoc', '.adoc .ad .asc .asciidoc'],
    ['apl', '.apl'],
    ['asm', '.asm .s'],
    ['asp', '.asp .asa .aspx .asax .ashx .ascx .asmx'],
    ['aspx', '.asp .asa .aspx .asax .ashx .ascx .asmx'],
    ['batch', '.bat .cmd'],
    ['bazel', '.bazel'],
    ['bitbake', '.bb .bbappend .bbclass .inc'],
    ['cc', '.c .h .xs'],
    ['cfmx', '.cfc .cfm .cfml'],
    ['chpl', '.chpl'],
    ['clojure', '.clj .cljs .cljc .cljx .edn'],
    ['coffee', '.coffee .cjsx'],
    ['config', '.config'],
    ['coq', '.coq .g .v'],
    ['cpp', '.cpp .cc .C .cxx .m .hpp .hh .h .H .hxx .tpp'],
    ['crystal', '.cr .ecr'],
    ['csharp', '.cs'],
    ['cshtml', '.cshtml'],
    ['css', '.css'],
    ['cython', '.pyx .pxd .pxi'],
    [
      'delphi',
      '.pas .int .dfm .nfm .dof .dpk .dpr .dproj .groupproj .bdsgroup .bdsproj',
    ],
    ['dlang', '.d .di'],
    ['dot', '.dot .gv'],
    ['dts', '.dts .dtsi'],
    ['ebuild', '.ebuild .eclass'],
    ['elisp', '.el'],
    ['elixir', '.ex .eex .exs'],
    ['elm', '.elm'],
    ['erlang', '.erl .hrl'],
    ['factor', '.factor'],
    ['fortran', '.f .F .f77 .f90 .F90 .f95 .f03 .for .ftn .fpp .FPP'],
    ['fsharp', '.fs .fsi .fsx'],
    ['gettext', '.po .pot .mo'],
    ['glsl', '.vert .tesc .tese .geom .frag .comp'],
    ['go', '.go'],
    ['gradle', '.gradle'],
    ['groovy', '.groovy .gtmpl .gpp .grunit .gradle'],
    ['haml', '.haml'],
    ['handlebars', '.hbs'],
    ['haskell', '.hs .hsig .lhs'],
    ['haxe', '.hx'],
    ['hh', '.h'],
    ['html', '.htm .html .shtml .xhtml'],
    ['idris', '.idr .ipkg .lidr'],
    ['ini', '.ini'],
    ['ipython', '.ipynb'],
    ['isabelle', '.thy'],
    ['j', '.ijs'],
    ['jade', '.jade'],
    ['java', '.java .properties'],
    ['jinja2', '.j2'],
    ['js', '.es6 .js .jsx .vue'],
    ['json', '.json'],
    ['jsp', '.jsp .jspx .jhtm .jhtml .jspf .tag .tagf'],
    ['julia', '.jl'],
    ['kotlin', '.kt'],
    ['less', '.less'],
    ['liquid', '.liquid'],
    ['lisp', '.lisp .lsp'],
    ['log', '.log'],
    ['lua', '.lua'],
    ['m4', '.m4'],
    ['make', '.Makefiles .mk .mak'],
    ['mako', '.mako'],
    ['markdown', '.markdown .mdown .mdwn .mkdn .mkd .md'],
    ['mason', '.mas .mhtml .mpl .mtxt'],
    ['matlab', '.m'],
    ['mathematica', '.m .wl'],
    ['md', '.markdown .mdown .mdwn .mkdn .mkd .md'],
    ['mercury', '.m .moo'],
    ['naccess', '.asa .rsa'],
    ['nim', '.nim'],
    ['nix', '.nix'],
    ['objc', '.m .h'],
    ['objcpp', '.mm .h'],
    ['ocaml', '.ml .mli .mll .mly'],
    ['octave', '.m'],
    ['org', '.org'],
    ['parrot', '.pir .pasm .pmc .ops .pod .pg .tg'],
    ['pdb', '.pdb'],
    ['perl', '.pl .pm .pm6 .pod .t'],
    ['php', '.php .phpt .php3 .php4 .php5 .phtml'],
    ['pike', '.pike .pmod'],
    ['plist', '.plist'],
    ['plone', '.pt .cpt .metadata .cpy .py .xml .zcml'],
    ['powershell', '.ps1'],
    ['proto', '.proto'],
    ['ps1', '.ps1'],
    ['pug', '.pug'],
    ['puppet', '.pp'],
    ['python', '.py'],
    ['qml', '.qml'],
    ['racket', '.rkt .ss .scm'],
    ['rake', '.Rakefile'],
    ['razor', '.cshtml'],
    ['restructuredtext', '.rst'],
    ['rs', '.rs'],
    ['r', '.r .R .Rmd .Rnw .Rtex .Rrst'],
    ['rdoc', '.rdoc'],
    ['ruby', '.rb .rhtml .rjs .rxml .erb .rake .spec'],
    ['rust', '.rs'],
    ['salt', '.sls'],
    ['sass', '.sass .scss'],
    ['scala', '.scala'],
    ['scheme', '.scm .ss'],
    ['shell', '.sh .bash .csh .tcsh .ksh .zsh .fish'],
    ['smalltalk', '.st'],
    ['sml', '.sml .fun .mlb .sig'],
    ['sql', '.sql .ctl'],
    ['stata', '.do .ado'],
    ['stylus', '.styl'],
    ['swift', '.swift'],
    ['tcl', '.tcl .itcl .itk'],
    ['terraform', '.tf .tfvars'],
    ['tex', '.tex .cls .sty'],
    ['thrift', '.thrift'],
    ['tla', '.tla'],
    ['tt', '.tt .tt2 .ttml'],
    ['toml', '.toml'],
    ['ts', '.ts .tsx'],
    ['twig', '.twig'],
    ['vala', '.vala .vapi'],
    ['vb', '.bas .cls .frm .ctl .vb .resx'],
    ['velocity', '.vm .vtl .vsl'],
    ['verilog', '.v .vh .sv .svh'],
    ['vhdl', '.vhd .vhdl'],
    ['vim', '.vim'],
    ['vue', '.vue'],
    ['wix', '.wxi .wxs'],
    ['wsdl', '.wsdl'],
    ['wadl', '.wadl'],
    ['xml', '.xml .dtd .xsl .xslt .xsd .ent .tld .plist .wsdl'],
    ['yaml', '.yaml .yml'],
    ['zeek', '.zeek .bro .bif'],
    ['zephir', '.zep'],
  ],
];
@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonTitle,
    IonSearchbar,
    IonContent,
    IonList,
    IonItem,
    IonCheckbox,
    IonLabel,
    IonIcon,
    CommonModule,
  ],
})
export class TypesComponent implements OnInit {
  @Input()
  selected: string[] | undefined | null = [];
  @Input()
  searcher: pb.Searcher | null | undefined = pb.Searcher.rg;
  @Output()
  selectionCancel = new EventEmitter<void>();
  @Output()
  selectionChange = new EventEmitter<string[]>();
  private workingSelectedValues: string[] = [];
  filteredItems: string[][] = [];
  constructor() {
    addIcons({ closeCircle, checkmarkCircle });
  }

  private getSearcher() {
    if (this.searcher) {
      return this.searcher;
    }

    return 0;
  }

  ngOnInit(): void {
    this.filteredItems = [...types[this.getSearcher()]];

    if (this.selected) {
      this.workingSelectedValues = [...this.selected];
    }
  }

  isChecked(value: string) {
    return this.workingSelectedValues.find((item) => item === value);
  }

  checkboxChange(ev: any) {
    const { checked, value } = ev.detail;

    if (checked) {
      this.workingSelectedValues = [...this.workingSelectedValues, value];
    } else {
      this.workingSelectedValues = this.workingSelectedValues.filter(
        (item) => item !== value
      );
    }
  }

  searchbarInput(ev: any) {
    this.filterList(ev.target.value);
  }

  cancelChanges() {
    this.selectionCancel.emit();
  }

  confirmChanges() {
    this.selectionChange.emit(this.workingSelectedValues);
  }

  trackItems(index: number, item: string[][]) {
    return item[0];
  }

  private filterList(searchQuery: string | undefined) {
    if (searchQuery === undefined) {
      this.filteredItems = [...types[this.getSearcher()]];
      return;
    }

    const normalizedQuery = searchQuery.toLowerCase();
    this.filteredItems = types[this.getSearcher()].filter((item) => {
      return (
        item[0].toLowerCase().includes(normalizedQuery) ||
        item[1].toLowerCase().includes(normalizedQuery)
      );
    });
  }
}
