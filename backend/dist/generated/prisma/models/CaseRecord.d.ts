import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model CaseRecord
 *
 */
export type CaseRecordModel = runtime.Types.Result.DefaultSelection<Prisma.$CaseRecordPayload>;
export type AggregateCaseRecord = {
    _count: CaseRecordCountAggregateOutputType | null;
    _avg: CaseRecordAvgAggregateOutputType | null;
    _sum: CaseRecordSumAggregateOutputType | null;
    _min: CaseRecordMinAggregateOutputType | null;
    _max: CaseRecordMaxAggregateOutputType | null;
};
export type CaseRecordAvgAggregateOutputType = {
    crimeYear: number | null;
};
export type CaseRecordSumAggregateOutputType = {
    crimeYear: number | null;
};
export type CaseRecordMinAggregateOutputType = {
    id: string | null;
    policeStation: string | null;
    ioName: string | null;
    ioId: string | null;
    crimeNumber: string | null;
    crimeYear: number | null;
    firDate: Date | null;
    seizureDate: Date | null;
    actLaw: string | null;
    sectionLaw: string | null;
    status: $Enums.CaseStatus | null;
    createdAt: Date | null;
    userId: string | null;
};
export type CaseRecordMaxAggregateOutputType = {
    id: string | null;
    policeStation: string | null;
    ioName: string | null;
    ioId: string | null;
    crimeNumber: string | null;
    crimeYear: number | null;
    firDate: Date | null;
    seizureDate: Date | null;
    actLaw: string | null;
    sectionLaw: string | null;
    status: $Enums.CaseStatus | null;
    createdAt: Date | null;
    userId: string | null;
};
export type CaseRecordCountAggregateOutputType = {
    id: number;
    policeStation: number;
    ioName: number;
    ioId: number;
    crimeNumber: number;
    crimeYear: number;
    firDate: number;
    seizureDate: number;
    actLaw: number;
    sectionLaw: number;
    status: number;
    createdAt: number;
    userId: number;
    _all: number;
};
export type CaseRecordAvgAggregateInputType = {
    crimeYear?: true;
};
export type CaseRecordSumAggregateInputType = {
    crimeYear?: true;
};
export type CaseRecordMinAggregateInputType = {
    id?: true;
    policeStation?: true;
    ioName?: true;
    ioId?: true;
    crimeNumber?: true;
    crimeYear?: true;
    firDate?: true;
    seizureDate?: true;
    actLaw?: true;
    sectionLaw?: true;
    status?: true;
    createdAt?: true;
    userId?: true;
};
export type CaseRecordMaxAggregateInputType = {
    id?: true;
    policeStation?: true;
    ioName?: true;
    ioId?: true;
    crimeNumber?: true;
    crimeYear?: true;
    firDate?: true;
    seizureDate?: true;
    actLaw?: true;
    sectionLaw?: true;
    status?: true;
    createdAt?: true;
    userId?: true;
};
export type CaseRecordCountAggregateInputType = {
    id?: true;
    policeStation?: true;
    ioName?: true;
    ioId?: true;
    crimeNumber?: true;
    crimeYear?: true;
    firDate?: true;
    seizureDate?: true;
    actLaw?: true;
    sectionLaw?: true;
    status?: true;
    createdAt?: true;
    userId?: true;
    _all?: true;
};
export type CaseRecordAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CaseRecord to aggregate.
     */
    where?: Prisma.CaseRecordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CaseRecords to fetch.
     */
    orderBy?: Prisma.CaseRecordOrderByWithRelationInput | Prisma.CaseRecordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.CaseRecordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CaseRecords from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CaseRecords.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CaseRecords
    **/
    _count?: true | CaseRecordCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: CaseRecordAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: CaseRecordSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CaseRecordMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CaseRecordMaxAggregateInputType;
};
export type GetCaseRecordAggregateType<T extends CaseRecordAggregateArgs> = {
    [P in keyof T & keyof AggregateCaseRecord]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCaseRecord[P]> : Prisma.GetScalarType<T[P], AggregateCaseRecord[P]>;
};
export type CaseRecordGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CaseRecordWhereInput;
    orderBy?: Prisma.CaseRecordOrderByWithAggregationInput | Prisma.CaseRecordOrderByWithAggregationInput[];
    by: Prisma.CaseRecordScalarFieldEnum[] | Prisma.CaseRecordScalarFieldEnum;
    having?: Prisma.CaseRecordScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CaseRecordCountAggregateInputType | true;
    _avg?: CaseRecordAvgAggregateInputType;
    _sum?: CaseRecordSumAggregateInputType;
    _min?: CaseRecordMinAggregateInputType;
    _max?: CaseRecordMaxAggregateInputType;
};
export type CaseRecordGroupByOutputType = {
    id: string;
    policeStation: string;
    ioName: string;
    ioId: string;
    crimeNumber: string;
    crimeYear: number;
    firDate: Date;
    seizureDate: Date;
    actLaw: string;
    sectionLaw: string;
    status: $Enums.CaseStatus;
    createdAt: Date;
    userId: string;
    _count: CaseRecordCountAggregateOutputType | null;
    _avg: CaseRecordAvgAggregateOutputType | null;
    _sum: CaseRecordSumAggregateOutputType | null;
    _min: CaseRecordMinAggregateOutputType | null;
    _max: CaseRecordMaxAggregateOutputType | null;
};
type GetCaseRecordGroupByPayload<T extends CaseRecordGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CaseRecordGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CaseRecordGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CaseRecordGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CaseRecordGroupByOutputType[P]>;
}>>;
export type CaseRecordWhereInput = {
    AND?: Prisma.CaseRecordWhereInput | Prisma.CaseRecordWhereInput[];
    OR?: Prisma.CaseRecordWhereInput[];
    NOT?: Prisma.CaseRecordWhereInput | Prisma.CaseRecordWhereInput[];
    id?: Prisma.StringFilter<"CaseRecord"> | string;
    policeStation?: Prisma.StringFilter<"CaseRecord"> | string;
    ioName?: Prisma.StringFilter<"CaseRecord"> | string;
    ioId?: Prisma.StringFilter<"CaseRecord"> | string;
    crimeNumber?: Prisma.StringFilter<"CaseRecord"> | string;
    crimeYear?: Prisma.IntFilter<"CaseRecord"> | number;
    firDate?: Prisma.DateTimeFilter<"CaseRecord"> | Date | string;
    seizureDate?: Prisma.DateTimeFilter<"CaseRecord"> | Date | string;
    actLaw?: Prisma.StringFilter<"CaseRecord"> | string;
    sectionLaw?: Prisma.StringFilter<"CaseRecord"> | string;
    status?: Prisma.EnumCaseStatusFilter<"CaseRecord"> | $Enums.CaseStatus;
    createdAt?: Prisma.DateTimeFilter<"CaseRecord"> | Date | string;
    userId?: Prisma.StringFilter<"CaseRecord"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    properties?: Prisma.PropertyListRelationFilter;
};
export type CaseRecordOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    policeStation?: Prisma.SortOrder;
    ioName?: Prisma.SortOrder;
    ioId?: Prisma.SortOrder;
    crimeNumber?: Prisma.SortOrder;
    crimeYear?: Prisma.SortOrder;
    firDate?: Prisma.SortOrder;
    seizureDate?: Prisma.SortOrder;
    actLaw?: Prisma.SortOrder;
    sectionLaw?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    properties?: Prisma.PropertyOrderByRelationAggregateInput;
};
export type CaseRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CaseRecordWhereInput | Prisma.CaseRecordWhereInput[];
    OR?: Prisma.CaseRecordWhereInput[];
    NOT?: Prisma.CaseRecordWhereInput | Prisma.CaseRecordWhereInput[];
    policeStation?: Prisma.StringFilter<"CaseRecord"> | string;
    ioName?: Prisma.StringFilter<"CaseRecord"> | string;
    ioId?: Prisma.StringFilter<"CaseRecord"> | string;
    crimeNumber?: Prisma.StringFilter<"CaseRecord"> | string;
    crimeYear?: Prisma.IntFilter<"CaseRecord"> | number;
    firDate?: Prisma.DateTimeFilter<"CaseRecord"> | Date | string;
    seizureDate?: Prisma.DateTimeFilter<"CaseRecord"> | Date | string;
    actLaw?: Prisma.StringFilter<"CaseRecord"> | string;
    sectionLaw?: Prisma.StringFilter<"CaseRecord"> | string;
    status?: Prisma.EnumCaseStatusFilter<"CaseRecord"> | $Enums.CaseStatus;
    createdAt?: Prisma.DateTimeFilter<"CaseRecord"> | Date | string;
    userId?: Prisma.StringFilter<"CaseRecord"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    properties?: Prisma.PropertyListRelationFilter;
}, "id">;
export type CaseRecordOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    policeStation?: Prisma.SortOrder;
    ioName?: Prisma.SortOrder;
    ioId?: Prisma.SortOrder;
    crimeNumber?: Prisma.SortOrder;
    crimeYear?: Prisma.SortOrder;
    firDate?: Prisma.SortOrder;
    seizureDate?: Prisma.SortOrder;
    actLaw?: Prisma.SortOrder;
    sectionLaw?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    _count?: Prisma.CaseRecordCountOrderByAggregateInput;
    _avg?: Prisma.CaseRecordAvgOrderByAggregateInput;
    _max?: Prisma.CaseRecordMaxOrderByAggregateInput;
    _min?: Prisma.CaseRecordMinOrderByAggregateInput;
    _sum?: Prisma.CaseRecordSumOrderByAggregateInput;
};
export type CaseRecordScalarWhereWithAggregatesInput = {
    AND?: Prisma.CaseRecordScalarWhereWithAggregatesInput | Prisma.CaseRecordScalarWhereWithAggregatesInput[];
    OR?: Prisma.CaseRecordScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CaseRecordScalarWhereWithAggregatesInput | Prisma.CaseRecordScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CaseRecord"> | string;
    policeStation?: Prisma.StringWithAggregatesFilter<"CaseRecord"> | string;
    ioName?: Prisma.StringWithAggregatesFilter<"CaseRecord"> | string;
    ioId?: Prisma.StringWithAggregatesFilter<"CaseRecord"> | string;
    crimeNumber?: Prisma.StringWithAggregatesFilter<"CaseRecord"> | string;
    crimeYear?: Prisma.IntWithAggregatesFilter<"CaseRecord"> | number;
    firDate?: Prisma.DateTimeWithAggregatesFilter<"CaseRecord"> | Date | string;
    seizureDate?: Prisma.DateTimeWithAggregatesFilter<"CaseRecord"> | Date | string;
    actLaw?: Prisma.StringWithAggregatesFilter<"CaseRecord"> | string;
    sectionLaw?: Prisma.StringWithAggregatesFilter<"CaseRecord"> | string;
    status?: Prisma.EnumCaseStatusWithAggregatesFilter<"CaseRecord"> | $Enums.CaseStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CaseRecord"> | Date | string;
    userId?: Prisma.StringWithAggregatesFilter<"CaseRecord"> | string;
};
export type CaseRecordCreateInput = {
    id?: string;
    policeStation: string;
    ioName: string;
    ioId: string;
    crimeNumber: string;
    crimeYear: number;
    firDate: Date | string;
    seizureDate: Date | string;
    actLaw: string;
    sectionLaw: string;
    status?: $Enums.CaseStatus;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutCasesInput;
    properties?: Prisma.PropertyCreateNestedManyWithoutCaseInput;
};
export type CaseRecordUncheckedCreateInput = {
    id?: string;
    policeStation: string;
    ioName: string;
    ioId: string;
    crimeNumber: string;
    crimeYear: number;
    firDate: Date | string;
    seizureDate: Date | string;
    actLaw: string;
    sectionLaw: string;
    status?: $Enums.CaseStatus;
    createdAt?: Date | string;
    userId: string;
    properties?: Prisma.PropertyUncheckedCreateNestedManyWithoutCaseInput;
};
export type CaseRecordUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    policeStation?: Prisma.StringFieldUpdateOperationsInput | string;
    ioName?: Prisma.StringFieldUpdateOperationsInput | string;
    ioId?: Prisma.StringFieldUpdateOperationsInput | string;
    crimeNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    crimeYear?: Prisma.IntFieldUpdateOperationsInput | number;
    firDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    seizureDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actLaw?: Prisma.StringFieldUpdateOperationsInput | string;
    sectionLaw?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutCasesNestedInput;
    properties?: Prisma.PropertyUpdateManyWithoutCaseNestedInput;
};
export type CaseRecordUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    policeStation?: Prisma.StringFieldUpdateOperationsInput | string;
    ioName?: Prisma.StringFieldUpdateOperationsInput | string;
    ioId?: Prisma.StringFieldUpdateOperationsInput | string;
    crimeNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    crimeYear?: Prisma.IntFieldUpdateOperationsInput | number;
    firDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    seizureDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actLaw?: Prisma.StringFieldUpdateOperationsInput | string;
    sectionLaw?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    properties?: Prisma.PropertyUncheckedUpdateManyWithoutCaseNestedInput;
};
export type CaseRecordCreateManyInput = {
    id?: string;
    policeStation: string;
    ioName: string;
    ioId: string;
    crimeNumber: string;
    crimeYear: number;
    firDate: Date | string;
    seizureDate: Date | string;
    actLaw: string;
    sectionLaw: string;
    status?: $Enums.CaseStatus;
    createdAt?: Date | string;
    userId: string;
};
export type CaseRecordUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    policeStation?: Prisma.StringFieldUpdateOperationsInput | string;
    ioName?: Prisma.StringFieldUpdateOperationsInput | string;
    ioId?: Prisma.StringFieldUpdateOperationsInput | string;
    crimeNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    crimeYear?: Prisma.IntFieldUpdateOperationsInput | number;
    firDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    seizureDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actLaw?: Prisma.StringFieldUpdateOperationsInput | string;
    sectionLaw?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CaseRecordUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    policeStation?: Prisma.StringFieldUpdateOperationsInput | string;
    ioName?: Prisma.StringFieldUpdateOperationsInput | string;
    ioId?: Prisma.StringFieldUpdateOperationsInput | string;
    crimeNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    crimeYear?: Prisma.IntFieldUpdateOperationsInput | number;
    firDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    seizureDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actLaw?: Prisma.StringFieldUpdateOperationsInput | string;
    sectionLaw?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CaseRecordListRelationFilter = {
    every?: Prisma.CaseRecordWhereInput;
    some?: Prisma.CaseRecordWhereInput;
    none?: Prisma.CaseRecordWhereInput;
};
export type CaseRecordOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CaseRecordCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    policeStation?: Prisma.SortOrder;
    ioName?: Prisma.SortOrder;
    ioId?: Prisma.SortOrder;
    crimeNumber?: Prisma.SortOrder;
    crimeYear?: Prisma.SortOrder;
    firDate?: Prisma.SortOrder;
    seizureDate?: Prisma.SortOrder;
    actLaw?: Prisma.SortOrder;
    sectionLaw?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type CaseRecordAvgOrderByAggregateInput = {
    crimeYear?: Prisma.SortOrder;
};
export type CaseRecordMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    policeStation?: Prisma.SortOrder;
    ioName?: Prisma.SortOrder;
    ioId?: Prisma.SortOrder;
    crimeNumber?: Prisma.SortOrder;
    crimeYear?: Prisma.SortOrder;
    firDate?: Prisma.SortOrder;
    seizureDate?: Prisma.SortOrder;
    actLaw?: Prisma.SortOrder;
    sectionLaw?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type CaseRecordMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    policeStation?: Prisma.SortOrder;
    ioName?: Prisma.SortOrder;
    ioId?: Prisma.SortOrder;
    crimeNumber?: Prisma.SortOrder;
    crimeYear?: Prisma.SortOrder;
    firDate?: Prisma.SortOrder;
    seizureDate?: Prisma.SortOrder;
    actLaw?: Prisma.SortOrder;
    sectionLaw?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type CaseRecordSumOrderByAggregateInput = {
    crimeYear?: Prisma.SortOrder;
};
export type CaseRecordScalarRelationFilter = {
    is?: Prisma.CaseRecordWhereInput;
    isNot?: Prisma.CaseRecordWhereInput;
};
export type CaseRecordCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CaseRecordCreateWithoutUserInput, Prisma.CaseRecordUncheckedCreateWithoutUserInput> | Prisma.CaseRecordCreateWithoutUserInput[] | Prisma.CaseRecordUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CaseRecordCreateOrConnectWithoutUserInput | Prisma.CaseRecordCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.CaseRecordCreateManyUserInputEnvelope;
    connect?: Prisma.CaseRecordWhereUniqueInput | Prisma.CaseRecordWhereUniqueInput[];
};
export type CaseRecordUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CaseRecordCreateWithoutUserInput, Prisma.CaseRecordUncheckedCreateWithoutUserInput> | Prisma.CaseRecordCreateWithoutUserInput[] | Prisma.CaseRecordUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CaseRecordCreateOrConnectWithoutUserInput | Prisma.CaseRecordCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.CaseRecordCreateManyUserInputEnvelope;
    connect?: Prisma.CaseRecordWhereUniqueInput | Prisma.CaseRecordWhereUniqueInput[];
};
export type CaseRecordUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CaseRecordCreateWithoutUserInput, Prisma.CaseRecordUncheckedCreateWithoutUserInput> | Prisma.CaseRecordCreateWithoutUserInput[] | Prisma.CaseRecordUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CaseRecordCreateOrConnectWithoutUserInput | Prisma.CaseRecordCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.CaseRecordUpsertWithWhereUniqueWithoutUserInput | Prisma.CaseRecordUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.CaseRecordCreateManyUserInputEnvelope;
    set?: Prisma.CaseRecordWhereUniqueInput | Prisma.CaseRecordWhereUniqueInput[];
    disconnect?: Prisma.CaseRecordWhereUniqueInput | Prisma.CaseRecordWhereUniqueInput[];
    delete?: Prisma.CaseRecordWhereUniqueInput | Prisma.CaseRecordWhereUniqueInput[];
    connect?: Prisma.CaseRecordWhereUniqueInput | Prisma.CaseRecordWhereUniqueInput[];
    update?: Prisma.CaseRecordUpdateWithWhereUniqueWithoutUserInput | Prisma.CaseRecordUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.CaseRecordUpdateManyWithWhereWithoutUserInput | Prisma.CaseRecordUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.CaseRecordScalarWhereInput | Prisma.CaseRecordScalarWhereInput[];
};
export type CaseRecordUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CaseRecordCreateWithoutUserInput, Prisma.CaseRecordUncheckedCreateWithoutUserInput> | Prisma.CaseRecordCreateWithoutUserInput[] | Prisma.CaseRecordUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CaseRecordCreateOrConnectWithoutUserInput | Prisma.CaseRecordCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.CaseRecordUpsertWithWhereUniqueWithoutUserInput | Prisma.CaseRecordUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.CaseRecordCreateManyUserInputEnvelope;
    set?: Prisma.CaseRecordWhereUniqueInput | Prisma.CaseRecordWhereUniqueInput[];
    disconnect?: Prisma.CaseRecordWhereUniqueInput | Prisma.CaseRecordWhereUniqueInput[];
    delete?: Prisma.CaseRecordWhereUniqueInput | Prisma.CaseRecordWhereUniqueInput[];
    connect?: Prisma.CaseRecordWhereUniqueInput | Prisma.CaseRecordWhereUniqueInput[];
    update?: Prisma.CaseRecordUpdateWithWhereUniqueWithoutUserInput | Prisma.CaseRecordUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.CaseRecordUpdateManyWithWhereWithoutUserInput | Prisma.CaseRecordUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.CaseRecordScalarWhereInput | Prisma.CaseRecordScalarWhereInput[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EnumCaseStatusFieldUpdateOperationsInput = {
    set?: $Enums.CaseStatus;
};
export type CaseRecordCreateNestedOneWithoutPropertiesInput = {
    create?: Prisma.XOR<Prisma.CaseRecordCreateWithoutPropertiesInput, Prisma.CaseRecordUncheckedCreateWithoutPropertiesInput>;
    connectOrCreate?: Prisma.CaseRecordCreateOrConnectWithoutPropertiesInput;
    connect?: Prisma.CaseRecordWhereUniqueInput;
};
export type CaseRecordUpdateOneRequiredWithoutPropertiesNestedInput = {
    create?: Prisma.XOR<Prisma.CaseRecordCreateWithoutPropertiesInput, Prisma.CaseRecordUncheckedCreateWithoutPropertiesInput>;
    connectOrCreate?: Prisma.CaseRecordCreateOrConnectWithoutPropertiesInput;
    upsert?: Prisma.CaseRecordUpsertWithoutPropertiesInput;
    connect?: Prisma.CaseRecordWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CaseRecordUpdateToOneWithWhereWithoutPropertiesInput, Prisma.CaseRecordUpdateWithoutPropertiesInput>, Prisma.CaseRecordUncheckedUpdateWithoutPropertiesInput>;
};
export type CaseRecordCreateWithoutUserInput = {
    id?: string;
    policeStation: string;
    ioName: string;
    ioId: string;
    crimeNumber: string;
    crimeYear: number;
    firDate: Date | string;
    seizureDate: Date | string;
    actLaw: string;
    sectionLaw: string;
    status?: $Enums.CaseStatus;
    createdAt?: Date | string;
    properties?: Prisma.PropertyCreateNestedManyWithoutCaseInput;
};
export type CaseRecordUncheckedCreateWithoutUserInput = {
    id?: string;
    policeStation: string;
    ioName: string;
    ioId: string;
    crimeNumber: string;
    crimeYear: number;
    firDate: Date | string;
    seizureDate: Date | string;
    actLaw: string;
    sectionLaw: string;
    status?: $Enums.CaseStatus;
    createdAt?: Date | string;
    properties?: Prisma.PropertyUncheckedCreateNestedManyWithoutCaseInput;
};
export type CaseRecordCreateOrConnectWithoutUserInput = {
    where: Prisma.CaseRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.CaseRecordCreateWithoutUserInput, Prisma.CaseRecordUncheckedCreateWithoutUserInput>;
};
export type CaseRecordCreateManyUserInputEnvelope = {
    data: Prisma.CaseRecordCreateManyUserInput | Prisma.CaseRecordCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type CaseRecordUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.CaseRecordWhereUniqueInput;
    update: Prisma.XOR<Prisma.CaseRecordUpdateWithoutUserInput, Prisma.CaseRecordUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.CaseRecordCreateWithoutUserInput, Prisma.CaseRecordUncheckedCreateWithoutUserInput>;
};
export type CaseRecordUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.CaseRecordWhereUniqueInput;
    data: Prisma.XOR<Prisma.CaseRecordUpdateWithoutUserInput, Prisma.CaseRecordUncheckedUpdateWithoutUserInput>;
};
export type CaseRecordUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.CaseRecordScalarWhereInput;
    data: Prisma.XOR<Prisma.CaseRecordUpdateManyMutationInput, Prisma.CaseRecordUncheckedUpdateManyWithoutUserInput>;
};
export type CaseRecordScalarWhereInput = {
    AND?: Prisma.CaseRecordScalarWhereInput | Prisma.CaseRecordScalarWhereInput[];
    OR?: Prisma.CaseRecordScalarWhereInput[];
    NOT?: Prisma.CaseRecordScalarWhereInput | Prisma.CaseRecordScalarWhereInput[];
    id?: Prisma.StringFilter<"CaseRecord"> | string;
    policeStation?: Prisma.StringFilter<"CaseRecord"> | string;
    ioName?: Prisma.StringFilter<"CaseRecord"> | string;
    ioId?: Prisma.StringFilter<"CaseRecord"> | string;
    crimeNumber?: Prisma.StringFilter<"CaseRecord"> | string;
    crimeYear?: Prisma.IntFilter<"CaseRecord"> | number;
    firDate?: Prisma.DateTimeFilter<"CaseRecord"> | Date | string;
    seizureDate?: Prisma.DateTimeFilter<"CaseRecord"> | Date | string;
    actLaw?: Prisma.StringFilter<"CaseRecord"> | string;
    sectionLaw?: Prisma.StringFilter<"CaseRecord"> | string;
    status?: Prisma.EnumCaseStatusFilter<"CaseRecord"> | $Enums.CaseStatus;
    createdAt?: Prisma.DateTimeFilter<"CaseRecord"> | Date | string;
    userId?: Prisma.StringFilter<"CaseRecord"> | string;
};
export type CaseRecordCreateWithoutPropertiesInput = {
    id?: string;
    policeStation: string;
    ioName: string;
    ioId: string;
    crimeNumber: string;
    crimeYear: number;
    firDate: Date | string;
    seizureDate: Date | string;
    actLaw: string;
    sectionLaw: string;
    status?: $Enums.CaseStatus;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutCasesInput;
};
export type CaseRecordUncheckedCreateWithoutPropertiesInput = {
    id?: string;
    policeStation: string;
    ioName: string;
    ioId: string;
    crimeNumber: string;
    crimeYear: number;
    firDate: Date | string;
    seizureDate: Date | string;
    actLaw: string;
    sectionLaw: string;
    status?: $Enums.CaseStatus;
    createdAt?: Date | string;
    userId: string;
};
export type CaseRecordCreateOrConnectWithoutPropertiesInput = {
    where: Prisma.CaseRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.CaseRecordCreateWithoutPropertiesInput, Prisma.CaseRecordUncheckedCreateWithoutPropertiesInput>;
};
export type CaseRecordUpsertWithoutPropertiesInput = {
    update: Prisma.XOR<Prisma.CaseRecordUpdateWithoutPropertiesInput, Prisma.CaseRecordUncheckedUpdateWithoutPropertiesInput>;
    create: Prisma.XOR<Prisma.CaseRecordCreateWithoutPropertiesInput, Prisma.CaseRecordUncheckedCreateWithoutPropertiesInput>;
    where?: Prisma.CaseRecordWhereInput;
};
export type CaseRecordUpdateToOneWithWhereWithoutPropertiesInput = {
    where?: Prisma.CaseRecordWhereInput;
    data: Prisma.XOR<Prisma.CaseRecordUpdateWithoutPropertiesInput, Prisma.CaseRecordUncheckedUpdateWithoutPropertiesInput>;
};
export type CaseRecordUpdateWithoutPropertiesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    policeStation?: Prisma.StringFieldUpdateOperationsInput | string;
    ioName?: Prisma.StringFieldUpdateOperationsInput | string;
    ioId?: Prisma.StringFieldUpdateOperationsInput | string;
    crimeNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    crimeYear?: Prisma.IntFieldUpdateOperationsInput | number;
    firDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    seizureDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actLaw?: Prisma.StringFieldUpdateOperationsInput | string;
    sectionLaw?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutCasesNestedInput;
};
export type CaseRecordUncheckedUpdateWithoutPropertiesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    policeStation?: Prisma.StringFieldUpdateOperationsInput | string;
    ioName?: Prisma.StringFieldUpdateOperationsInput | string;
    ioId?: Prisma.StringFieldUpdateOperationsInput | string;
    crimeNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    crimeYear?: Prisma.IntFieldUpdateOperationsInput | number;
    firDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    seizureDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actLaw?: Prisma.StringFieldUpdateOperationsInput | string;
    sectionLaw?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CaseRecordCreateManyUserInput = {
    id?: string;
    policeStation: string;
    ioName: string;
    ioId: string;
    crimeNumber: string;
    crimeYear: number;
    firDate: Date | string;
    seizureDate: Date | string;
    actLaw: string;
    sectionLaw: string;
    status?: $Enums.CaseStatus;
    createdAt?: Date | string;
};
export type CaseRecordUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    policeStation?: Prisma.StringFieldUpdateOperationsInput | string;
    ioName?: Prisma.StringFieldUpdateOperationsInput | string;
    ioId?: Prisma.StringFieldUpdateOperationsInput | string;
    crimeNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    crimeYear?: Prisma.IntFieldUpdateOperationsInput | number;
    firDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    seizureDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actLaw?: Prisma.StringFieldUpdateOperationsInput | string;
    sectionLaw?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    properties?: Prisma.PropertyUpdateManyWithoutCaseNestedInput;
};
export type CaseRecordUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    policeStation?: Prisma.StringFieldUpdateOperationsInput | string;
    ioName?: Prisma.StringFieldUpdateOperationsInput | string;
    ioId?: Prisma.StringFieldUpdateOperationsInput | string;
    crimeNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    crimeYear?: Prisma.IntFieldUpdateOperationsInput | number;
    firDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    seizureDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actLaw?: Prisma.StringFieldUpdateOperationsInput | string;
    sectionLaw?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    properties?: Prisma.PropertyUncheckedUpdateManyWithoutCaseNestedInput;
};
export type CaseRecordUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    policeStation?: Prisma.StringFieldUpdateOperationsInput | string;
    ioName?: Prisma.StringFieldUpdateOperationsInput | string;
    ioId?: Prisma.StringFieldUpdateOperationsInput | string;
    crimeNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    crimeYear?: Prisma.IntFieldUpdateOperationsInput | number;
    firDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    seizureDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actLaw?: Prisma.StringFieldUpdateOperationsInput | string;
    sectionLaw?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type CaseRecordCountOutputType
 */
export type CaseRecordCountOutputType = {
    properties: number;
};
export type CaseRecordCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    properties?: boolean | CaseRecordCountOutputTypeCountPropertiesArgs;
};
/**
 * CaseRecordCountOutputType without action
 */
export type CaseRecordCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseRecordCountOutputType
     */
    select?: Prisma.CaseRecordCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * CaseRecordCountOutputType without action
 */
export type CaseRecordCountOutputTypeCountPropertiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PropertyWhereInput;
};
export type CaseRecordSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    policeStation?: boolean;
    ioName?: boolean;
    ioId?: boolean;
    crimeNumber?: boolean;
    crimeYear?: boolean;
    firDate?: boolean;
    seizureDate?: boolean;
    actLaw?: boolean;
    sectionLaw?: boolean;
    status?: boolean;
    createdAt?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    properties?: boolean | Prisma.CaseRecord$propertiesArgs<ExtArgs>;
    _count?: boolean | Prisma.CaseRecordCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["caseRecord"]>;
export type CaseRecordSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    policeStation?: boolean;
    ioName?: boolean;
    ioId?: boolean;
    crimeNumber?: boolean;
    crimeYear?: boolean;
    firDate?: boolean;
    seizureDate?: boolean;
    actLaw?: boolean;
    sectionLaw?: boolean;
    status?: boolean;
    createdAt?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["caseRecord"]>;
export type CaseRecordSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    policeStation?: boolean;
    ioName?: boolean;
    ioId?: boolean;
    crimeNumber?: boolean;
    crimeYear?: boolean;
    firDate?: boolean;
    seizureDate?: boolean;
    actLaw?: boolean;
    sectionLaw?: boolean;
    status?: boolean;
    createdAt?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["caseRecord"]>;
export type CaseRecordSelectScalar = {
    id?: boolean;
    policeStation?: boolean;
    ioName?: boolean;
    ioId?: boolean;
    crimeNumber?: boolean;
    crimeYear?: boolean;
    firDate?: boolean;
    seizureDate?: boolean;
    actLaw?: boolean;
    sectionLaw?: boolean;
    status?: boolean;
    createdAt?: boolean;
    userId?: boolean;
};
export type CaseRecordOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "policeStation" | "ioName" | "ioId" | "crimeNumber" | "crimeYear" | "firDate" | "seizureDate" | "actLaw" | "sectionLaw" | "status" | "createdAt" | "userId", ExtArgs["result"]["caseRecord"]>;
export type CaseRecordInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    properties?: boolean | Prisma.CaseRecord$propertiesArgs<ExtArgs>;
    _count?: boolean | Prisma.CaseRecordCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CaseRecordIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type CaseRecordIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $CaseRecordPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CaseRecord";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        properties: Prisma.$PropertyPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        policeStation: string;
        ioName: string;
        ioId: string;
        crimeNumber: string;
        crimeYear: number;
        firDate: Date;
        seizureDate: Date;
        actLaw: string;
        sectionLaw: string;
        status: $Enums.CaseStatus;
        createdAt: Date;
        userId: string;
    }, ExtArgs["result"]["caseRecord"]>;
    composites: {};
};
export type CaseRecordGetPayload<S extends boolean | null | undefined | CaseRecordDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CaseRecordPayload, S>;
export type CaseRecordCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CaseRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CaseRecordCountAggregateInputType | true;
};
export interface CaseRecordDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CaseRecord'];
        meta: {
            name: 'CaseRecord';
        };
    };
    /**
     * Find zero or one CaseRecord that matches the filter.
     * @param {CaseRecordFindUniqueArgs} args - Arguments to find a CaseRecord
     * @example
     * // Get one CaseRecord
     * const caseRecord = await prisma.caseRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CaseRecordFindUniqueArgs>(args: Prisma.SelectSubset<T, CaseRecordFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CaseRecordClient<runtime.Types.Result.GetResult<Prisma.$CaseRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one CaseRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CaseRecordFindUniqueOrThrowArgs} args - Arguments to find a CaseRecord
     * @example
     * // Get one CaseRecord
     * const caseRecord = await prisma.caseRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CaseRecordFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CaseRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CaseRecordClient<runtime.Types.Result.GetResult<Prisma.$CaseRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CaseRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseRecordFindFirstArgs} args - Arguments to find a CaseRecord
     * @example
     * // Get one CaseRecord
     * const caseRecord = await prisma.caseRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CaseRecordFindFirstArgs>(args?: Prisma.SelectSubset<T, CaseRecordFindFirstArgs<ExtArgs>>): Prisma.Prisma__CaseRecordClient<runtime.Types.Result.GetResult<Prisma.$CaseRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CaseRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseRecordFindFirstOrThrowArgs} args - Arguments to find a CaseRecord
     * @example
     * // Get one CaseRecord
     * const caseRecord = await prisma.caseRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CaseRecordFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CaseRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CaseRecordClient<runtime.Types.Result.GetResult<Prisma.$CaseRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more CaseRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CaseRecords
     * const caseRecords = await prisma.caseRecord.findMany()
     *
     * // Get first 10 CaseRecords
     * const caseRecords = await prisma.caseRecord.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const caseRecordWithIdOnly = await prisma.caseRecord.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CaseRecordFindManyArgs>(args?: Prisma.SelectSubset<T, CaseRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CaseRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a CaseRecord.
     * @param {CaseRecordCreateArgs} args - Arguments to create a CaseRecord.
     * @example
     * // Create one CaseRecord
     * const CaseRecord = await prisma.caseRecord.create({
     *   data: {
     *     // ... data to create a CaseRecord
     *   }
     * })
     *
     */
    create<T extends CaseRecordCreateArgs>(args: Prisma.SelectSubset<T, CaseRecordCreateArgs<ExtArgs>>): Prisma.Prisma__CaseRecordClient<runtime.Types.Result.GetResult<Prisma.$CaseRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many CaseRecords.
     * @param {CaseRecordCreateManyArgs} args - Arguments to create many CaseRecords.
     * @example
     * // Create many CaseRecords
     * const caseRecord = await prisma.caseRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CaseRecordCreateManyArgs>(args?: Prisma.SelectSubset<T, CaseRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many CaseRecords and returns the data saved in the database.
     * @param {CaseRecordCreateManyAndReturnArgs} args - Arguments to create many CaseRecords.
     * @example
     * // Create many CaseRecords
     * const caseRecord = await prisma.caseRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many CaseRecords and only return the `id`
     * const caseRecordWithIdOnly = await prisma.caseRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CaseRecordCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CaseRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CaseRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a CaseRecord.
     * @param {CaseRecordDeleteArgs} args - Arguments to delete one CaseRecord.
     * @example
     * // Delete one CaseRecord
     * const CaseRecord = await prisma.caseRecord.delete({
     *   where: {
     *     // ... filter to delete one CaseRecord
     *   }
     * })
     *
     */
    delete<T extends CaseRecordDeleteArgs>(args: Prisma.SelectSubset<T, CaseRecordDeleteArgs<ExtArgs>>): Prisma.Prisma__CaseRecordClient<runtime.Types.Result.GetResult<Prisma.$CaseRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one CaseRecord.
     * @param {CaseRecordUpdateArgs} args - Arguments to update one CaseRecord.
     * @example
     * // Update one CaseRecord
     * const caseRecord = await prisma.caseRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CaseRecordUpdateArgs>(args: Prisma.SelectSubset<T, CaseRecordUpdateArgs<ExtArgs>>): Prisma.Prisma__CaseRecordClient<runtime.Types.Result.GetResult<Prisma.$CaseRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more CaseRecords.
     * @param {CaseRecordDeleteManyArgs} args - Arguments to filter CaseRecords to delete.
     * @example
     * // Delete a few CaseRecords
     * const { count } = await prisma.caseRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CaseRecordDeleteManyArgs>(args?: Prisma.SelectSubset<T, CaseRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CaseRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CaseRecords
     * const caseRecord = await prisma.caseRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CaseRecordUpdateManyArgs>(args: Prisma.SelectSubset<T, CaseRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CaseRecords and returns the data updated in the database.
     * @param {CaseRecordUpdateManyAndReturnArgs} args - Arguments to update many CaseRecords.
     * @example
     * // Update many CaseRecords
     * const caseRecord = await prisma.caseRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more CaseRecords and only return the `id`
     * const caseRecordWithIdOnly = await prisma.caseRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends CaseRecordUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CaseRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CaseRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one CaseRecord.
     * @param {CaseRecordUpsertArgs} args - Arguments to update or create a CaseRecord.
     * @example
     * // Update or create a CaseRecord
     * const caseRecord = await prisma.caseRecord.upsert({
     *   create: {
     *     // ... data to create a CaseRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CaseRecord we want to update
     *   }
     * })
     */
    upsert<T extends CaseRecordUpsertArgs>(args: Prisma.SelectSubset<T, CaseRecordUpsertArgs<ExtArgs>>): Prisma.Prisma__CaseRecordClient<runtime.Types.Result.GetResult<Prisma.$CaseRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of CaseRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseRecordCountArgs} args - Arguments to filter CaseRecords to count.
     * @example
     * // Count the number of CaseRecords
     * const count = await prisma.caseRecord.count({
     *   where: {
     *     // ... the filter for the CaseRecords we want to count
     *   }
     * })
    **/
    count<T extends CaseRecordCountArgs>(args?: Prisma.Subset<T, CaseRecordCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CaseRecordCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a CaseRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CaseRecordAggregateArgs>(args: Prisma.Subset<T, CaseRecordAggregateArgs>): Prisma.PrismaPromise<GetCaseRecordAggregateType<T>>;
    /**
     * Group by CaseRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends CaseRecordGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CaseRecordGroupByArgs['orderBy'];
    } : {
        orderBy?: CaseRecordGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CaseRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCaseRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CaseRecord model
     */
    readonly fields: CaseRecordFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for CaseRecord.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__CaseRecordClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    properties<T extends Prisma.CaseRecord$propertiesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CaseRecord$propertiesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the CaseRecord model
 */
export interface CaseRecordFieldRefs {
    readonly id: Prisma.FieldRef<"CaseRecord", 'String'>;
    readonly policeStation: Prisma.FieldRef<"CaseRecord", 'String'>;
    readonly ioName: Prisma.FieldRef<"CaseRecord", 'String'>;
    readonly ioId: Prisma.FieldRef<"CaseRecord", 'String'>;
    readonly crimeNumber: Prisma.FieldRef<"CaseRecord", 'String'>;
    readonly crimeYear: Prisma.FieldRef<"CaseRecord", 'Int'>;
    readonly firDate: Prisma.FieldRef<"CaseRecord", 'DateTime'>;
    readonly seizureDate: Prisma.FieldRef<"CaseRecord", 'DateTime'>;
    readonly actLaw: Prisma.FieldRef<"CaseRecord", 'String'>;
    readonly sectionLaw: Prisma.FieldRef<"CaseRecord", 'String'>;
    readonly status: Prisma.FieldRef<"CaseRecord", 'CaseStatus'>;
    readonly createdAt: Prisma.FieldRef<"CaseRecord", 'DateTime'>;
    readonly userId: Prisma.FieldRef<"CaseRecord", 'String'>;
}
/**
 * CaseRecord findUnique
 */
export type CaseRecordFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseRecord
     */
    select?: Prisma.CaseRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CaseRecord
     */
    omit?: Prisma.CaseRecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CaseRecordInclude<ExtArgs> | null;
    /**
     * Filter, which CaseRecord to fetch.
     */
    where: Prisma.CaseRecordWhereUniqueInput;
};
/**
 * CaseRecord findUniqueOrThrow
 */
export type CaseRecordFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseRecord
     */
    select?: Prisma.CaseRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CaseRecord
     */
    omit?: Prisma.CaseRecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CaseRecordInclude<ExtArgs> | null;
    /**
     * Filter, which CaseRecord to fetch.
     */
    where: Prisma.CaseRecordWhereUniqueInput;
};
/**
 * CaseRecord findFirst
 */
export type CaseRecordFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseRecord
     */
    select?: Prisma.CaseRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CaseRecord
     */
    omit?: Prisma.CaseRecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CaseRecordInclude<ExtArgs> | null;
    /**
     * Filter, which CaseRecord to fetch.
     */
    where?: Prisma.CaseRecordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CaseRecords to fetch.
     */
    orderBy?: Prisma.CaseRecordOrderByWithRelationInput | Prisma.CaseRecordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CaseRecords.
     */
    cursor?: Prisma.CaseRecordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CaseRecords from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CaseRecords.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CaseRecords.
     */
    distinct?: Prisma.CaseRecordScalarFieldEnum | Prisma.CaseRecordScalarFieldEnum[];
};
/**
 * CaseRecord findFirstOrThrow
 */
export type CaseRecordFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseRecord
     */
    select?: Prisma.CaseRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CaseRecord
     */
    omit?: Prisma.CaseRecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CaseRecordInclude<ExtArgs> | null;
    /**
     * Filter, which CaseRecord to fetch.
     */
    where?: Prisma.CaseRecordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CaseRecords to fetch.
     */
    orderBy?: Prisma.CaseRecordOrderByWithRelationInput | Prisma.CaseRecordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CaseRecords.
     */
    cursor?: Prisma.CaseRecordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CaseRecords from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CaseRecords.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CaseRecords.
     */
    distinct?: Prisma.CaseRecordScalarFieldEnum | Prisma.CaseRecordScalarFieldEnum[];
};
/**
 * CaseRecord findMany
 */
export type CaseRecordFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseRecord
     */
    select?: Prisma.CaseRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CaseRecord
     */
    omit?: Prisma.CaseRecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CaseRecordInclude<ExtArgs> | null;
    /**
     * Filter, which CaseRecords to fetch.
     */
    where?: Prisma.CaseRecordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CaseRecords to fetch.
     */
    orderBy?: Prisma.CaseRecordOrderByWithRelationInput | Prisma.CaseRecordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CaseRecords.
     */
    cursor?: Prisma.CaseRecordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CaseRecords from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CaseRecords.
     */
    skip?: number;
    distinct?: Prisma.CaseRecordScalarFieldEnum | Prisma.CaseRecordScalarFieldEnum[];
};
/**
 * CaseRecord create
 */
export type CaseRecordCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseRecord
     */
    select?: Prisma.CaseRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CaseRecord
     */
    omit?: Prisma.CaseRecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CaseRecordInclude<ExtArgs> | null;
    /**
     * The data needed to create a CaseRecord.
     */
    data: Prisma.XOR<Prisma.CaseRecordCreateInput, Prisma.CaseRecordUncheckedCreateInput>;
};
/**
 * CaseRecord createMany
 */
export type CaseRecordCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many CaseRecords.
     */
    data: Prisma.CaseRecordCreateManyInput | Prisma.CaseRecordCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * CaseRecord createManyAndReturn
 */
export type CaseRecordCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseRecord
     */
    select?: Prisma.CaseRecordSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CaseRecord
     */
    omit?: Prisma.CaseRecordOmit<ExtArgs> | null;
    /**
     * The data used to create many CaseRecords.
     */
    data: Prisma.CaseRecordCreateManyInput | Prisma.CaseRecordCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CaseRecordIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * CaseRecord update
 */
export type CaseRecordUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseRecord
     */
    select?: Prisma.CaseRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CaseRecord
     */
    omit?: Prisma.CaseRecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CaseRecordInclude<ExtArgs> | null;
    /**
     * The data needed to update a CaseRecord.
     */
    data: Prisma.XOR<Prisma.CaseRecordUpdateInput, Prisma.CaseRecordUncheckedUpdateInput>;
    /**
     * Choose, which CaseRecord to update.
     */
    where: Prisma.CaseRecordWhereUniqueInput;
};
/**
 * CaseRecord updateMany
 */
export type CaseRecordUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update CaseRecords.
     */
    data: Prisma.XOR<Prisma.CaseRecordUpdateManyMutationInput, Prisma.CaseRecordUncheckedUpdateManyInput>;
    /**
     * Filter which CaseRecords to update
     */
    where?: Prisma.CaseRecordWhereInput;
    /**
     * Limit how many CaseRecords to update.
     */
    limit?: number;
};
/**
 * CaseRecord updateManyAndReturn
 */
export type CaseRecordUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseRecord
     */
    select?: Prisma.CaseRecordSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CaseRecord
     */
    omit?: Prisma.CaseRecordOmit<ExtArgs> | null;
    /**
     * The data used to update CaseRecords.
     */
    data: Prisma.XOR<Prisma.CaseRecordUpdateManyMutationInput, Prisma.CaseRecordUncheckedUpdateManyInput>;
    /**
     * Filter which CaseRecords to update
     */
    where?: Prisma.CaseRecordWhereInput;
    /**
     * Limit how many CaseRecords to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CaseRecordIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * CaseRecord upsert
 */
export type CaseRecordUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseRecord
     */
    select?: Prisma.CaseRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CaseRecord
     */
    omit?: Prisma.CaseRecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CaseRecordInclude<ExtArgs> | null;
    /**
     * The filter to search for the CaseRecord to update in case it exists.
     */
    where: Prisma.CaseRecordWhereUniqueInput;
    /**
     * In case the CaseRecord found by the `where` argument doesn't exist, create a new CaseRecord with this data.
     */
    create: Prisma.XOR<Prisma.CaseRecordCreateInput, Prisma.CaseRecordUncheckedCreateInput>;
    /**
     * In case the CaseRecord was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.CaseRecordUpdateInput, Prisma.CaseRecordUncheckedUpdateInput>;
};
/**
 * CaseRecord delete
 */
export type CaseRecordDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseRecord
     */
    select?: Prisma.CaseRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CaseRecord
     */
    omit?: Prisma.CaseRecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CaseRecordInclude<ExtArgs> | null;
    /**
     * Filter which CaseRecord to delete.
     */
    where: Prisma.CaseRecordWhereUniqueInput;
};
/**
 * CaseRecord deleteMany
 */
export type CaseRecordDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CaseRecords to delete
     */
    where?: Prisma.CaseRecordWhereInput;
    /**
     * Limit how many CaseRecords to delete.
     */
    limit?: number;
};
/**
 * CaseRecord.properties
 */
export type CaseRecord$propertiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: Prisma.PropertySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Property
     */
    omit?: Prisma.PropertyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PropertyInclude<ExtArgs> | null;
    where?: Prisma.PropertyWhereInput;
    orderBy?: Prisma.PropertyOrderByWithRelationInput | Prisma.PropertyOrderByWithRelationInput[];
    cursor?: Prisma.PropertyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PropertyScalarFieldEnum | Prisma.PropertyScalarFieldEnum[];
};
/**
 * CaseRecord without action
 */
export type CaseRecordDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseRecord
     */
    select?: Prisma.CaseRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CaseRecord
     */
    omit?: Prisma.CaseRecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CaseRecordInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=CaseRecord.d.ts.map