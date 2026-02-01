import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Disposal
 *
 */
export type DisposalModel = runtime.Types.Result.DefaultSelection<Prisma.$DisposalPayload>;
export type AggregateDisposal = {
    _count: DisposalCountAggregateOutputType | null;
    _min: DisposalMinAggregateOutputType | null;
    _max: DisposalMaxAggregateOutputType | null;
};
export type DisposalMinAggregateOutputType = {
    id: string | null;
    type: $Enums.DisposalType | null;
    courtOrderRef: string | null;
    disposedAt: Date | null;
    remarks: string | null;
    propertyId: string | null;
};
export type DisposalMaxAggregateOutputType = {
    id: string | null;
    type: $Enums.DisposalType | null;
    courtOrderRef: string | null;
    disposedAt: Date | null;
    remarks: string | null;
    propertyId: string | null;
};
export type DisposalCountAggregateOutputType = {
    id: number;
    type: number;
    courtOrderRef: number;
    disposedAt: number;
    remarks: number;
    propertyId: number;
    _all: number;
};
export type DisposalMinAggregateInputType = {
    id?: true;
    type?: true;
    courtOrderRef?: true;
    disposedAt?: true;
    remarks?: true;
    propertyId?: true;
};
export type DisposalMaxAggregateInputType = {
    id?: true;
    type?: true;
    courtOrderRef?: true;
    disposedAt?: true;
    remarks?: true;
    propertyId?: true;
};
export type DisposalCountAggregateInputType = {
    id?: true;
    type?: true;
    courtOrderRef?: true;
    disposedAt?: true;
    remarks?: true;
    propertyId?: true;
    _all?: true;
};
export type DisposalAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Disposal to aggregate.
     */
    where?: Prisma.DisposalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Disposals to fetch.
     */
    orderBy?: Prisma.DisposalOrderByWithRelationInput | Prisma.DisposalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.DisposalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Disposals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Disposals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Disposals
    **/
    _count?: true | DisposalCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: DisposalMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: DisposalMaxAggregateInputType;
};
export type GetDisposalAggregateType<T extends DisposalAggregateArgs> = {
    [P in keyof T & keyof AggregateDisposal]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDisposal[P]> : Prisma.GetScalarType<T[P], AggregateDisposal[P]>;
};
export type DisposalGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DisposalWhereInput;
    orderBy?: Prisma.DisposalOrderByWithAggregationInput | Prisma.DisposalOrderByWithAggregationInput[];
    by: Prisma.DisposalScalarFieldEnum[] | Prisma.DisposalScalarFieldEnum;
    having?: Prisma.DisposalScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DisposalCountAggregateInputType | true;
    _min?: DisposalMinAggregateInputType;
    _max?: DisposalMaxAggregateInputType;
};
export type DisposalGroupByOutputType = {
    id: string;
    type: $Enums.DisposalType;
    courtOrderRef: string;
    disposedAt: Date;
    remarks: string | null;
    propertyId: string;
    _count: DisposalCountAggregateOutputType | null;
    _min: DisposalMinAggregateOutputType | null;
    _max: DisposalMaxAggregateOutputType | null;
};
type GetDisposalGroupByPayload<T extends DisposalGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DisposalGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DisposalGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DisposalGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DisposalGroupByOutputType[P]>;
}>>;
export type DisposalWhereInput = {
    AND?: Prisma.DisposalWhereInput | Prisma.DisposalWhereInput[];
    OR?: Prisma.DisposalWhereInput[];
    NOT?: Prisma.DisposalWhereInput | Prisma.DisposalWhereInput[];
    id?: Prisma.StringFilter<"Disposal"> | string;
    type?: Prisma.EnumDisposalTypeFilter<"Disposal"> | $Enums.DisposalType;
    courtOrderRef?: Prisma.StringFilter<"Disposal"> | string;
    disposedAt?: Prisma.DateTimeFilter<"Disposal"> | Date | string;
    remarks?: Prisma.StringNullableFilter<"Disposal"> | string | null;
    propertyId?: Prisma.StringFilter<"Disposal"> | string;
    property?: Prisma.XOR<Prisma.PropertyScalarRelationFilter, Prisma.PropertyWhereInput>;
};
export type DisposalOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    courtOrderRef?: Prisma.SortOrder;
    disposedAt?: Prisma.SortOrder;
    remarks?: Prisma.SortOrderInput | Prisma.SortOrder;
    propertyId?: Prisma.SortOrder;
    property?: Prisma.PropertyOrderByWithRelationInput;
};
export type DisposalWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    propertyId?: string;
    AND?: Prisma.DisposalWhereInput | Prisma.DisposalWhereInput[];
    OR?: Prisma.DisposalWhereInput[];
    NOT?: Prisma.DisposalWhereInput | Prisma.DisposalWhereInput[];
    type?: Prisma.EnumDisposalTypeFilter<"Disposal"> | $Enums.DisposalType;
    courtOrderRef?: Prisma.StringFilter<"Disposal"> | string;
    disposedAt?: Prisma.DateTimeFilter<"Disposal"> | Date | string;
    remarks?: Prisma.StringNullableFilter<"Disposal"> | string | null;
    property?: Prisma.XOR<Prisma.PropertyScalarRelationFilter, Prisma.PropertyWhereInput>;
}, "id" | "propertyId">;
export type DisposalOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    courtOrderRef?: Prisma.SortOrder;
    disposedAt?: Prisma.SortOrder;
    remarks?: Prisma.SortOrderInput | Prisma.SortOrder;
    propertyId?: Prisma.SortOrder;
    _count?: Prisma.DisposalCountOrderByAggregateInput;
    _max?: Prisma.DisposalMaxOrderByAggregateInput;
    _min?: Prisma.DisposalMinOrderByAggregateInput;
};
export type DisposalScalarWhereWithAggregatesInput = {
    AND?: Prisma.DisposalScalarWhereWithAggregatesInput | Prisma.DisposalScalarWhereWithAggregatesInput[];
    OR?: Prisma.DisposalScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DisposalScalarWhereWithAggregatesInput | Prisma.DisposalScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Disposal"> | string;
    type?: Prisma.EnumDisposalTypeWithAggregatesFilter<"Disposal"> | $Enums.DisposalType;
    courtOrderRef?: Prisma.StringWithAggregatesFilter<"Disposal"> | string;
    disposedAt?: Prisma.DateTimeWithAggregatesFilter<"Disposal"> | Date | string;
    remarks?: Prisma.StringNullableWithAggregatesFilter<"Disposal"> | string | null;
    propertyId?: Prisma.StringWithAggregatesFilter<"Disposal"> | string;
};
export type DisposalCreateInput = {
    id?: string;
    type: $Enums.DisposalType;
    courtOrderRef: string;
    disposedAt: Date | string;
    remarks?: string | null;
    property: Prisma.PropertyCreateNestedOneWithoutDisposalInput;
};
export type DisposalUncheckedCreateInput = {
    id?: string;
    type: $Enums.DisposalType;
    courtOrderRef: string;
    disposedAt: Date | string;
    remarks?: string | null;
    propertyId: string;
};
export type DisposalUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumDisposalTypeFieldUpdateOperationsInput | $Enums.DisposalType;
    courtOrderRef?: Prisma.StringFieldUpdateOperationsInput | string;
    disposedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    property?: Prisma.PropertyUpdateOneRequiredWithoutDisposalNestedInput;
};
export type DisposalUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumDisposalTypeFieldUpdateOperationsInput | $Enums.DisposalType;
    courtOrderRef?: Prisma.StringFieldUpdateOperationsInput | string;
    disposedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    propertyId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type DisposalCreateManyInput = {
    id?: string;
    type: $Enums.DisposalType;
    courtOrderRef: string;
    disposedAt: Date | string;
    remarks?: string | null;
    propertyId: string;
};
export type DisposalUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumDisposalTypeFieldUpdateOperationsInput | $Enums.DisposalType;
    courtOrderRef?: Prisma.StringFieldUpdateOperationsInput | string;
    disposedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DisposalUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumDisposalTypeFieldUpdateOperationsInput | $Enums.DisposalType;
    courtOrderRef?: Prisma.StringFieldUpdateOperationsInput | string;
    disposedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    propertyId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type DisposalNullableScalarRelationFilter = {
    is?: Prisma.DisposalWhereInput | null;
    isNot?: Prisma.DisposalWhereInput | null;
};
export type DisposalCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    courtOrderRef?: Prisma.SortOrder;
    disposedAt?: Prisma.SortOrder;
    remarks?: Prisma.SortOrder;
    propertyId?: Prisma.SortOrder;
};
export type DisposalMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    courtOrderRef?: Prisma.SortOrder;
    disposedAt?: Prisma.SortOrder;
    remarks?: Prisma.SortOrder;
    propertyId?: Prisma.SortOrder;
};
export type DisposalMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    courtOrderRef?: Prisma.SortOrder;
    disposedAt?: Prisma.SortOrder;
    remarks?: Prisma.SortOrder;
    propertyId?: Prisma.SortOrder;
};
export type DisposalCreateNestedOneWithoutPropertyInput = {
    create?: Prisma.XOR<Prisma.DisposalCreateWithoutPropertyInput, Prisma.DisposalUncheckedCreateWithoutPropertyInput>;
    connectOrCreate?: Prisma.DisposalCreateOrConnectWithoutPropertyInput;
    connect?: Prisma.DisposalWhereUniqueInput;
};
export type DisposalUncheckedCreateNestedOneWithoutPropertyInput = {
    create?: Prisma.XOR<Prisma.DisposalCreateWithoutPropertyInput, Prisma.DisposalUncheckedCreateWithoutPropertyInput>;
    connectOrCreate?: Prisma.DisposalCreateOrConnectWithoutPropertyInput;
    connect?: Prisma.DisposalWhereUniqueInput;
};
export type DisposalUpdateOneWithoutPropertyNestedInput = {
    create?: Prisma.XOR<Prisma.DisposalCreateWithoutPropertyInput, Prisma.DisposalUncheckedCreateWithoutPropertyInput>;
    connectOrCreate?: Prisma.DisposalCreateOrConnectWithoutPropertyInput;
    upsert?: Prisma.DisposalUpsertWithoutPropertyInput;
    disconnect?: Prisma.DisposalWhereInput | boolean;
    delete?: Prisma.DisposalWhereInput | boolean;
    connect?: Prisma.DisposalWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DisposalUpdateToOneWithWhereWithoutPropertyInput, Prisma.DisposalUpdateWithoutPropertyInput>, Prisma.DisposalUncheckedUpdateWithoutPropertyInput>;
};
export type DisposalUncheckedUpdateOneWithoutPropertyNestedInput = {
    create?: Prisma.XOR<Prisma.DisposalCreateWithoutPropertyInput, Prisma.DisposalUncheckedCreateWithoutPropertyInput>;
    connectOrCreate?: Prisma.DisposalCreateOrConnectWithoutPropertyInput;
    upsert?: Prisma.DisposalUpsertWithoutPropertyInput;
    disconnect?: Prisma.DisposalWhereInput | boolean;
    delete?: Prisma.DisposalWhereInput | boolean;
    connect?: Prisma.DisposalWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DisposalUpdateToOneWithWhereWithoutPropertyInput, Prisma.DisposalUpdateWithoutPropertyInput>, Prisma.DisposalUncheckedUpdateWithoutPropertyInput>;
};
export type EnumDisposalTypeFieldUpdateOperationsInput = {
    set?: $Enums.DisposalType;
};
export type DisposalCreateWithoutPropertyInput = {
    id?: string;
    type: $Enums.DisposalType;
    courtOrderRef: string;
    disposedAt: Date | string;
    remarks?: string | null;
};
export type DisposalUncheckedCreateWithoutPropertyInput = {
    id?: string;
    type: $Enums.DisposalType;
    courtOrderRef: string;
    disposedAt: Date | string;
    remarks?: string | null;
};
export type DisposalCreateOrConnectWithoutPropertyInput = {
    where: Prisma.DisposalWhereUniqueInput;
    create: Prisma.XOR<Prisma.DisposalCreateWithoutPropertyInput, Prisma.DisposalUncheckedCreateWithoutPropertyInput>;
};
export type DisposalUpsertWithoutPropertyInput = {
    update: Prisma.XOR<Prisma.DisposalUpdateWithoutPropertyInput, Prisma.DisposalUncheckedUpdateWithoutPropertyInput>;
    create: Prisma.XOR<Prisma.DisposalCreateWithoutPropertyInput, Prisma.DisposalUncheckedCreateWithoutPropertyInput>;
    where?: Prisma.DisposalWhereInput;
};
export type DisposalUpdateToOneWithWhereWithoutPropertyInput = {
    where?: Prisma.DisposalWhereInput;
    data: Prisma.XOR<Prisma.DisposalUpdateWithoutPropertyInput, Prisma.DisposalUncheckedUpdateWithoutPropertyInput>;
};
export type DisposalUpdateWithoutPropertyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumDisposalTypeFieldUpdateOperationsInput | $Enums.DisposalType;
    courtOrderRef?: Prisma.StringFieldUpdateOperationsInput | string;
    disposedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DisposalUncheckedUpdateWithoutPropertyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumDisposalTypeFieldUpdateOperationsInput | $Enums.DisposalType;
    courtOrderRef?: Prisma.StringFieldUpdateOperationsInput | string;
    disposedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DisposalSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    type?: boolean;
    courtOrderRef?: boolean;
    disposedAt?: boolean;
    remarks?: boolean;
    propertyId?: boolean;
    property?: boolean | Prisma.PropertyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["disposal"]>;
export type DisposalSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    type?: boolean;
    courtOrderRef?: boolean;
    disposedAt?: boolean;
    remarks?: boolean;
    propertyId?: boolean;
    property?: boolean | Prisma.PropertyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["disposal"]>;
export type DisposalSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    type?: boolean;
    courtOrderRef?: boolean;
    disposedAt?: boolean;
    remarks?: boolean;
    propertyId?: boolean;
    property?: boolean | Prisma.PropertyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["disposal"]>;
export type DisposalSelectScalar = {
    id?: boolean;
    type?: boolean;
    courtOrderRef?: boolean;
    disposedAt?: boolean;
    remarks?: boolean;
    propertyId?: boolean;
};
export type DisposalOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "type" | "courtOrderRef" | "disposedAt" | "remarks" | "propertyId", ExtArgs["result"]["disposal"]>;
export type DisposalInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    property?: boolean | Prisma.PropertyDefaultArgs<ExtArgs>;
};
export type DisposalIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    property?: boolean | Prisma.PropertyDefaultArgs<ExtArgs>;
};
export type DisposalIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    property?: boolean | Prisma.PropertyDefaultArgs<ExtArgs>;
};
export type $DisposalPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Disposal";
    objects: {
        property: Prisma.$PropertyPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        type: $Enums.DisposalType;
        courtOrderRef: string;
        disposedAt: Date;
        remarks: string | null;
        propertyId: string;
    }, ExtArgs["result"]["disposal"]>;
    composites: {};
};
export type DisposalGetPayload<S extends boolean | null | undefined | DisposalDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DisposalPayload, S>;
export type DisposalCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DisposalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DisposalCountAggregateInputType | true;
};
export interface DisposalDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Disposal'];
        meta: {
            name: 'Disposal';
        };
    };
    /**
     * Find zero or one Disposal that matches the filter.
     * @param {DisposalFindUniqueArgs} args - Arguments to find a Disposal
     * @example
     * // Get one Disposal
     * const disposal = await prisma.disposal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DisposalFindUniqueArgs>(args: Prisma.SelectSubset<T, DisposalFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DisposalClient<runtime.Types.Result.GetResult<Prisma.$DisposalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Disposal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DisposalFindUniqueOrThrowArgs} args - Arguments to find a Disposal
     * @example
     * // Get one Disposal
     * const disposal = await prisma.disposal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DisposalFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DisposalFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DisposalClient<runtime.Types.Result.GetResult<Prisma.$DisposalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Disposal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisposalFindFirstArgs} args - Arguments to find a Disposal
     * @example
     * // Get one Disposal
     * const disposal = await prisma.disposal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DisposalFindFirstArgs>(args?: Prisma.SelectSubset<T, DisposalFindFirstArgs<ExtArgs>>): Prisma.Prisma__DisposalClient<runtime.Types.Result.GetResult<Prisma.$DisposalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Disposal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisposalFindFirstOrThrowArgs} args - Arguments to find a Disposal
     * @example
     * // Get one Disposal
     * const disposal = await prisma.disposal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DisposalFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DisposalFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DisposalClient<runtime.Types.Result.GetResult<Prisma.$DisposalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Disposals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisposalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Disposals
     * const disposals = await prisma.disposal.findMany()
     *
     * // Get first 10 Disposals
     * const disposals = await prisma.disposal.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const disposalWithIdOnly = await prisma.disposal.findMany({ select: { id: true } })
     *
     */
    findMany<T extends DisposalFindManyArgs>(args?: Prisma.SelectSubset<T, DisposalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DisposalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Disposal.
     * @param {DisposalCreateArgs} args - Arguments to create a Disposal.
     * @example
     * // Create one Disposal
     * const Disposal = await prisma.disposal.create({
     *   data: {
     *     // ... data to create a Disposal
     *   }
     * })
     *
     */
    create<T extends DisposalCreateArgs>(args: Prisma.SelectSubset<T, DisposalCreateArgs<ExtArgs>>): Prisma.Prisma__DisposalClient<runtime.Types.Result.GetResult<Prisma.$DisposalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Disposals.
     * @param {DisposalCreateManyArgs} args - Arguments to create many Disposals.
     * @example
     * // Create many Disposals
     * const disposal = await prisma.disposal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends DisposalCreateManyArgs>(args?: Prisma.SelectSubset<T, DisposalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Disposals and returns the data saved in the database.
     * @param {DisposalCreateManyAndReturnArgs} args - Arguments to create many Disposals.
     * @example
     * // Create many Disposals
     * const disposal = await prisma.disposal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Disposals and only return the `id`
     * const disposalWithIdOnly = await prisma.disposal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends DisposalCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DisposalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DisposalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Disposal.
     * @param {DisposalDeleteArgs} args - Arguments to delete one Disposal.
     * @example
     * // Delete one Disposal
     * const Disposal = await prisma.disposal.delete({
     *   where: {
     *     // ... filter to delete one Disposal
     *   }
     * })
     *
     */
    delete<T extends DisposalDeleteArgs>(args: Prisma.SelectSubset<T, DisposalDeleteArgs<ExtArgs>>): Prisma.Prisma__DisposalClient<runtime.Types.Result.GetResult<Prisma.$DisposalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Disposal.
     * @param {DisposalUpdateArgs} args - Arguments to update one Disposal.
     * @example
     * // Update one Disposal
     * const disposal = await prisma.disposal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends DisposalUpdateArgs>(args: Prisma.SelectSubset<T, DisposalUpdateArgs<ExtArgs>>): Prisma.Prisma__DisposalClient<runtime.Types.Result.GetResult<Prisma.$DisposalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Disposals.
     * @param {DisposalDeleteManyArgs} args - Arguments to filter Disposals to delete.
     * @example
     * // Delete a few Disposals
     * const { count } = await prisma.disposal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends DisposalDeleteManyArgs>(args?: Prisma.SelectSubset<T, DisposalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Disposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisposalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Disposals
     * const disposal = await prisma.disposal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends DisposalUpdateManyArgs>(args: Prisma.SelectSubset<T, DisposalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Disposals and returns the data updated in the database.
     * @param {DisposalUpdateManyAndReturnArgs} args - Arguments to update many Disposals.
     * @example
     * // Update many Disposals
     * const disposal = await prisma.disposal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Disposals and only return the `id`
     * const disposalWithIdOnly = await prisma.disposal.updateManyAndReturn({
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
    updateManyAndReturn<T extends DisposalUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DisposalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DisposalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Disposal.
     * @param {DisposalUpsertArgs} args - Arguments to update or create a Disposal.
     * @example
     * // Update or create a Disposal
     * const disposal = await prisma.disposal.upsert({
     *   create: {
     *     // ... data to create a Disposal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Disposal we want to update
     *   }
     * })
     */
    upsert<T extends DisposalUpsertArgs>(args: Prisma.SelectSubset<T, DisposalUpsertArgs<ExtArgs>>): Prisma.Prisma__DisposalClient<runtime.Types.Result.GetResult<Prisma.$DisposalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Disposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisposalCountArgs} args - Arguments to filter Disposals to count.
     * @example
     * // Count the number of Disposals
     * const count = await prisma.disposal.count({
     *   where: {
     *     // ... the filter for the Disposals we want to count
     *   }
     * })
    **/
    count<T extends DisposalCountArgs>(args?: Prisma.Subset<T, DisposalCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DisposalCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Disposal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisposalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DisposalAggregateArgs>(args: Prisma.Subset<T, DisposalAggregateArgs>): Prisma.PrismaPromise<GetDisposalAggregateType<T>>;
    /**
     * Group by Disposal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisposalGroupByArgs} args - Group by arguments.
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
    groupBy<T extends DisposalGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DisposalGroupByArgs['orderBy'];
    } : {
        orderBy?: DisposalGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DisposalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisposalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Disposal model
     */
    readonly fields: DisposalFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Disposal.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__DisposalClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    property<T extends Prisma.PropertyDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PropertyDefaultArgs<ExtArgs>>): Prisma.Prisma__PropertyClient<runtime.Types.Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Disposal model
 */
export interface DisposalFieldRefs {
    readonly id: Prisma.FieldRef<"Disposal", 'String'>;
    readonly type: Prisma.FieldRef<"Disposal", 'DisposalType'>;
    readonly courtOrderRef: Prisma.FieldRef<"Disposal", 'String'>;
    readonly disposedAt: Prisma.FieldRef<"Disposal", 'DateTime'>;
    readonly remarks: Prisma.FieldRef<"Disposal", 'String'>;
    readonly propertyId: Prisma.FieldRef<"Disposal", 'String'>;
}
/**
 * Disposal findUnique
 */
export type DisposalFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disposal
     */
    select?: Prisma.DisposalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Disposal
     */
    omit?: Prisma.DisposalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DisposalInclude<ExtArgs> | null;
    /**
     * Filter, which Disposal to fetch.
     */
    where: Prisma.DisposalWhereUniqueInput;
};
/**
 * Disposal findUniqueOrThrow
 */
export type DisposalFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disposal
     */
    select?: Prisma.DisposalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Disposal
     */
    omit?: Prisma.DisposalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DisposalInclude<ExtArgs> | null;
    /**
     * Filter, which Disposal to fetch.
     */
    where: Prisma.DisposalWhereUniqueInput;
};
/**
 * Disposal findFirst
 */
export type DisposalFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disposal
     */
    select?: Prisma.DisposalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Disposal
     */
    omit?: Prisma.DisposalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DisposalInclude<ExtArgs> | null;
    /**
     * Filter, which Disposal to fetch.
     */
    where?: Prisma.DisposalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Disposals to fetch.
     */
    orderBy?: Prisma.DisposalOrderByWithRelationInput | Prisma.DisposalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Disposals.
     */
    cursor?: Prisma.DisposalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Disposals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Disposals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Disposals.
     */
    distinct?: Prisma.DisposalScalarFieldEnum | Prisma.DisposalScalarFieldEnum[];
};
/**
 * Disposal findFirstOrThrow
 */
export type DisposalFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disposal
     */
    select?: Prisma.DisposalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Disposal
     */
    omit?: Prisma.DisposalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DisposalInclude<ExtArgs> | null;
    /**
     * Filter, which Disposal to fetch.
     */
    where?: Prisma.DisposalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Disposals to fetch.
     */
    orderBy?: Prisma.DisposalOrderByWithRelationInput | Prisma.DisposalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Disposals.
     */
    cursor?: Prisma.DisposalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Disposals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Disposals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Disposals.
     */
    distinct?: Prisma.DisposalScalarFieldEnum | Prisma.DisposalScalarFieldEnum[];
};
/**
 * Disposal findMany
 */
export type DisposalFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disposal
     */
    select?: Prisma.DisposalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Disposal
     */
    omit?: Prisma.DisposalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DisposalInclude<ExtArgs> | null;
    /**
     * Filter, which Disposals to fetch.
     */
    where?: Prisma.DisposalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Disposals to fetch.
     */
    orderBy?: Prisma.DisposalOrderByWithRelationInput | Prisma.DisposalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Disposals.
     */
    cursor?: Prisma.DisposalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Disposals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Disposals.
     */
    skip?: number;
    distinct?: Prisma.DisposalScalarFieldEnum | Prisma.DisposalScalarFieldEnum[];
};
/**
 * Disposal create
 */
export type DisposalCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disposal
     */
    select?: Prisma.DisposalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Disposal
     */
    omit?: Prisma.DisposalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DisposalInclude<ExtArgs> | null;
    /**
     * The data needed to create a Disposal.
     */
    data: Prisma.XOR<Prisma.DisposalCreateInput, Prisma.DisposalUncheckedCreateInput>;
};
/**
 * Disposal createMany
 */
export type DisposalCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Disposals.
     */
    data: Prisma.DisposalCreateManyInput | Prisma.DisposalCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Disposal createManyAndReturn
 */
export type DisposalCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disposal
     */
    select?: Prisma.DisposalSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Disposal
     */
    omit?: Prisma.DisposalOmit<ExtArgs> | null;
    /**
     * The data used to create many Disposals.
     */
    data: Prisma.DisposalCreateManyInput | Prisma.DisposalCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DisposalIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Disposal update
 */
export type DisposalUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disposal
     */
    select?: Prisma.DisposalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Disposal
     */
    omit?: Prisma.DisposalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DisposalInclude<ExtArgs> | null;
    /**
     * The data needed to update a Disposal.
     */
    data: Prisma.XOR<Prisma.DisposalUpdateInput, Prisma.DisposalUncheckedUpdateInput>;
    /**
     * Choose, which Disposal to update.
     */
    where: Prisma.DisposalWhereUniqueInput;
};
/**
 * Disposal updateMany
 */
export type DisposalUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Disposals.
     */
    data: Prisma.XOR<Prisma.DisposalUpdateManyMutationInput, Prisma.DisposalUncheckedUpdateManyInput>;
    /**
     * Filter which Disposals to update
     */
    where?: Prisma.DisposalWhereInput;
    /**
     * Limit how many Disposals to update.
     */
    limit?: number;
};
/**
 * Disposal updateManyAndReturn
 */
export type DisposalUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disposal
     */
    select?: Prisma.DisposalSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Disposal
     */
    omit?: Prisma.DisposalOmit<ExtArgs> | null;
    /**
     * The data used to update Disposals.
     */
    data: Prisma.XOR<Prisma.DisposalUpdateManyMutationInput, Prisma.DisposalUncheckedUpdateManyInput>;
    /**
     * Filter which Disposals to update
     */
    where?: Prisma.DisposalWhereInput;
    /**
     * Limit how many Disposals to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DisposalIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Disposal upsert
 */
export type DisposalUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disposal
     */
    select?: Prisma.DisposalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Disposal
     */
    omit?: Prisma.DisposalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DisposalInclude<ExtArgs> | null;
    /**
     * The filter to search for the Disposal to update in case it exists.
     */
    where: Prisma.DisposalWhereUniqueInput;
    /**
     * In case the Disposal found by the `where` argument doesn't exist, create a new Disposal with this data.
     */
    create: Prisma.XOR<Prisma.DisposalCreateInput, Prisma.DisposalUncheckedCreateInput>;
    /**
     * In case the Disposal was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.DisposalUpdateInput, Prisma.DisposalUncheckedUpdateInput>;
};
/**
 * Disposal delete
 */
export type DisposalDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disposal
     */
    select?: Prisma.DisposalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Disposal
     */
    omit?: Prisma.DisposalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DisposalInclude<ExtArgs> | null;
    /**
     * Filter which Disposal to delete.
     */
    where: Prisma.DisposalWhereUniqueInput;
};
/**
 * Disposal deleteMany
 */
export type DisposalDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Disposals to delete
     */
    where?: Prisma.DisposalWhereInput;
    /**
     * Limit how many Disposals to delete.
     */
    limit?: number;
};
/**
 * Disposal without action
 */
export type DisposalDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disposal
     */
    select?: Prisma.DisposalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Disposal
     */
    omit?: Prisma.DisposalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DisposalInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Disposal.d.ts.map